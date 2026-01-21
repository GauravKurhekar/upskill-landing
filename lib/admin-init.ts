import { connectToDatabase } from './mongodb';
import bcrypt from 'bcryptjs';

export async function initializeAdmin(email: string, password: string) {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('admins');

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Update or insert admin
    const result = await collection.updateOne(
      { email },
      {
        $set: {
          email,
          passwordHash,
          updatedAt: new Date(),
          createdAt: { $ifNull: ['$createdAt', new Date()] }
        }
      },
      { upsert: true }
    );

    console.log('Admin credentials updated in database:', {
      email,
      modified: result.modifiedCount,
      upserted: result.upsertedCount
    });

    return result;
  } catch (error) {
    console.error('Error initializing admin:', error);
    throw error;
  }
}
