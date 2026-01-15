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

  const client = new MongoClient(MONGODB_URI as string);
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
