import { NextRequest, NextResponse } from 'next/server';
import { getLeadsCollection } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    console.log('Attempting to fetch leads...');
    console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
    const collection = await getLeadsCollection();
    const leads = await collection.find({}).sort({ submittedAt: -1 }).toArray();
    
    console.log('Successfully fetched leads:', leads.length);
    return NextResponse.json(leads, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Error fetching leads:', errorMessage);
    return NextResponse.json(
      { error: 'Failed to fetch leads', details: errorMessage },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('Attempting to save lead...');
    const body = await request.json();
    console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
    const collection = await getLeadsCollection();

    // Add timestamp if not present
    const lead = {
      ...body,
      _id: new ObjectId(),
      submittedAt: new Date(body.submittedAt || Date.now()),
      createdAt: new Date(),
    };

    const result = await collection.insertOne(lead);
    console.log('Lead saved successfully:', result.insertedId);

    return NextResponse.json(
      { _id: result.insertedId, ...lead },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Error saving lead:', errorMessage);
    return NextResponse.json(
      { error: 'Failed to save lead', details: errorMessage },
      { status: 500 }
    );
  }
}
