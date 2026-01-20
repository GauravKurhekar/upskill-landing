import { MongoClient, Db } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const MONGODB_URI = process.env.MONGODBURI;
  
  if (!MONGODB_URI) {
    throw new Error('MONGODBURI is not defined in environment variables');
  }

  const client = new MongoClient(MONGODB_URI as string, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  });
  await client.connect();
  const db = client.db('upskill_academy');

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export async function getLeadsCollection() {
  const { db } = await connectToDatabase();
  return db.collection('leads');
}
