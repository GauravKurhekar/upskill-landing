import { NextRequest, NextResponse } from 'next/server';
import { getLeadsCollection } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const collection = await getLeadsCollection();
    const leads = await collection.find({}).sort({ submittedAt: -1 }).toArray();
    
    return NextResponse.json(leads, { status: 200 });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const collection = await getLeadsCollection();

    // Add timestamp if not present
    const lead = {
      ...body,
      _id: new ObjectId(),
      submittedAt: new Date(body.submittedAt || Date.now()),
      createdAt: new Date(),
    };

    const result = await collection.insertOne(lead);

    return NextResponse.json(
      { _id: result.insertedId, ...lead },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    );
  }
}
