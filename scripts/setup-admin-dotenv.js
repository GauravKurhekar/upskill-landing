#!/usr/bin/env node

/**
 * Setup script to initialize admin credentials in MongoDB
 * Run: node scripts/setup-admin-dotenv.js
 */

require('dotenv').config({ path: '.env' });

const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const MONGODB_URI = process.env.MONGODB_URI;
const ADMIN_EMAIL = 'upskillacademy.training@gmail.com';
const ADMIN_PASSWORD = 'Upskill@2025';

async function setupAdmin() {
  if (!MONGODB_URI) {
    console.error('ERROR: MONGODB_URI is not set in environment variables');
    process.exit(1);
  }

  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db('upskill_academy');
    const collection = db.collection('admins');

    // Hash the password
    console.log('Hashing password...');
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);

    // Upsert admin credentials
    const result = await collection.updateOne(
      { email: ADMIN_EMAIL },
      {
        $set: {
          email: ADMIN_EMAIL,
          passwordHash,
          updatedAt: new Date()
        },
        $setOnInsert: {
          createdAt: new Date()
        }
      },
      { upsert: true }
    );

    console.log('\n✅ Admin credentials saved to MongoDB');
    console.log(`   Email: ${ADMIN_EMAIL}`);
    console.log(`   Password: ${ADMIN_PASSWORD}`);
    console.log(`   Modified: ${result.modifiedCount}, Inserted: ${result.upsertedCount}`);

  } catch (error) {
    console.error('❌ Error setting up admin:', error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

setupAdmin();
