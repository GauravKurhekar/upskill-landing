#!/usr/bin/env node

require('dotenv').config({ path: '.env' });

const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const MONGODB_URI = process.env.MONGODB_URI;

async function testAdminCredentials() {
  if (!MONGODB_URI) {
    console.error('ERROR: MONGODB_URI is not set');
    process.exit(1);
  }

  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB\n');

    const db = client.db('upskill_academy');
    const collection = db.collection('admins');

    // Find the admin
    const admin = await collection.findOne({ email: 'upskillacademy.training@gmail.com' });

    if (!admin) {
      console.error('❌ Admin not found in database');
      process.exit(1);
    }

    console.log('✅ Admin found in database:');
    console.log(`   Email: ${admin.email}`);
    console.log(`   Password Hash: ${admin.passwordHash.substring(0, 20)}...`);
    console.log(`   Created: ${admin.createdAt}`);
    console.log(`   Updated: ${admin.updatedAt}\n`);

    // Test the password
    const testPassword = 'Academyupskill@04';
    const isValid = await bcrypt.compare(testPassword, admin.passwordHash);

    if (isValid) {
      console.log('✅ Password verification: SUCCESS');
      console.log(`   Password "Academyupskill@04" is correct!`);
    } else {
      console.log('❌ Password verification: FAILED');
      console.log(`   Password "Academyupskill@04" does not match`);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  } finally {
    await client.close();
  }
}

testAdminCredentials();
