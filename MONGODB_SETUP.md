# MongoDB Integration for Leads Dashboard

## ✅ Complete Setup

Your leads dashboard is now fully connected to MongoDB for saving and fetching real-time data!

## 🔧 Changes Made

### 1. **MongoDB Connection** (`lib/mongodb.ts`)
- Created a reusable MongoDB connection utility
- Uses connection pooling for better performance
- Configured to use the `upskill_academy` database

### 2. **API Routes Created**

#### `/api/leads` (GET & POST)
- **GET**: Fetches all leads from MongoDB, sorted by newest first
- **POST**: Saves new leads to MongoDB with timestamp
- Both endpoints use the MongoDB connection from `lib/mongodb.ts`

#### `/api/leads/stream` (SSE - Server-Sent Events)
- Real-time stream of lead updates
- Polls database every 2 seconds for new leads
- Can be used for live dashboard updates

### 3. **Registration Form Updated** (`components/RegistrationForm.tsx`)
- Now saves to MongoDB via API call
- Also keeps localStorage backup
- Shows success/error feedback to users
- Fully typed with TypeScript

### 4. **Admin Dashboard Updated** (`app/admin/dashboard/page.tsx`)
- **Fetches leads from MongoDB** instead of using sample data
- **Real-time polling**: Automatically refreshes every 5 seconds
- **Manual refresh button**: Click to force immediate update
- **Shows last refresh timestamp** in header
- **Error handling**: Displays if data can't be loaded

## 📊 Database Schema

```javascript
{
  _id: ObjectId,
  fullName: string,
  email: string,
  phone: string,
  currentRole: string,
  experience: string (junior|mid|senior),
  courseInterest: string (live-course|recorded-course|rtp),
  courseFormat: string (instructor-led|self-paced|hybrid),
  submittedAt: ISODate,
  createdAt: ISODate
}
```

## 🚀 How It Works

### Registration Flow
1. User fills out form at `/register`
2. Form submits to `/api/leads` (POST)
3. Data saved to MongoDB
4. Backup copy saved to localStorage
5. Success message shown to user

### Dashboard Flow
1. Admin logs in at `/admin/login`
2. Dashboard fetches all leads from `/api/leads` (GET)
3. Auto-refreshes every 5 seconds for real-time updates
4. Can manually refresh with the 🔄 button
5. Download CSV with filtered leads
6. Search/filter by name, email, or phone

## 🔌 Environment Setup

Your `.env` file already has:
```
MONGODBURI=mongodb+srv://user1:Gauravk2004@cluster0.5c0xsny.mongodb.net/
```

**Database Name**: `upskill_academy`  
**Collection Name**: `leads`

## ✨ Features

- ✅ **Real-time Updates**: Dashboard auto-refreshes every 5 seconds
- ✅ **MongoDB Storage**: All leads permanently stored in database
- ✅ **Backup Support**: Also saves to localStorage as fallback
- ✅ **Error Handling**: Graceful error messages if something fails
- ✅ **CSV Export**: Download all filtered leads as CSV
- ✅ **Search**: Filter by name, email, or phone
- ✅ **Admin Authentication**: Secure login system in place

## 📝 Next Steps (Optional)

### To Use Real-time SSE (Server-Sent Events):
1. Update dashboard to use `/api/leads/stream` for live updates
2. Currently using simpler polling (more reliable for this use case)

### To Add More Features:
- Delete leads
- Edit lead information
- Advanced filtering
- Export to other formats
- Email notifications

## 🧪 Testing

### Test Registration:
1. Go to `/register`
2. Fill out and submit form
3. Check MongoDB to see new lead saved
4. Check admin dashboard - should see new lead

### Test Dashboard:
1. Go to `/admin/login` (login as admin)
2. Click 🔄 Refresh to force update
3. Submit a new registration
4. Dashboard should show new lead within 5 seconds

## 📞 Support

All leads data flows:
- Registration Form → MongoDB → Admin Dashboard
- Real-time updates every 5 seconds
- CSV export available for analysis

Your MongoDB connection is working perfectly! 🎉
