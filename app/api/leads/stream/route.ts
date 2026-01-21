import { NextRequest, NextResponse } from 'next/server';
import { getLeadsCollection } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const collection = await getLeadsCollection();
    
    // Set up SSE headers
    const headers = {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    };

    // Use the TextEncoder for streaming
    const encoder = new TextEncoder();
    
    const customReadable = new ReadableStream({
      async start(controller) {
        try {
          // Send initial data
          const initialLeads = await collection
            .find({})
            .sort({ submittedAt: -1 })
            .toArray();

          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: 'initial', data: initialLeads })}\n\n`)
          );

          // Keep connection alive and poll for changes
          let lastTimestamp = new Date();
          
          const intervalId = setInterval(async () => {
            try {
              const recentLeads = await collection
                .find({ createdAt: { $gt: lastTimestamp } })
                .toArray();

              if (recentLeads.length > 0) {
                lastTimestamp = new Date();
                controller.enqueue(
                  encoder.encode(`data: ${JSON.stringify({ type: 'update', data: recentLeads })}\n\n`)
                );
              }
            } catch (err) {
              console.error('Error polling for updates:', err);
            }
          }, 2000); // Poll every 2 seconds

          // Clear interval when client disconnects
          request.signal.addEventListener('abort', () => {
            clearInterval(intervalId);
            controller.close();
          });
        } catch (error) {
          console.error('Error setting up SSE:', error);
          controller.close();
        }
      },
    });

    return new NextResponse(customReadable, { headers });
  } catch (error) {
    console.error('Error in SSE endpoint:', error);
    return NextResponse.json(
      { error: 'Failed to establish real-time connection' },
      { status: 500 }
    );
  }
}
