# Sanity CMS Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Sanity Project

1. Go to https://www.sanity.io/
2. Sign up/Login with GitHub or Google
3. Click "Create Project"
4. Name it: "UpSkill Academy"
5. Copy your **Project ID**

### Step 2: Configure Environment

1. Create `.env.local` file in the root:
```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your Project ID:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

### Step 3: Deploy Sanity Studio

Run this command to create the dataset:
```bash
npx sanity dataset create production
```

### Step 4: Access the CMS

1. Start your dev server:
```bash
npm run dev
```

2. Go to: **http://localhost:3000/studio**

3. Login with your Sanity account

### Step 5: Add Content

Now you can add/edit:
- ✅ Testimonials
- ✅ Videos (with AWS links)
- ✅ FAQs
- ✅ Features
- ✅ Bonuses

---

## 📝 Content Types Available

### 1. Testimonials
- Student Name
- Job Role
- Company
- Testimonial Text
- Rating (1-5)
- Profile Image URL
- Display Order

### 2. Videos
- Video Title
- Description
- Video URL (AWS S3 or YouTube)
- Thumbnail Image URL
- Duration
- Display Order

### 3. FAQs
- Question
- Answer
- Display Order

### 4. Features
- Feature Title
- Description
- Icon Name (React Icon)
- Display Order

### 5. Bonuses
- Bonus Title
- Description
- Icon Name (React Icon)
- Display Order

---

## 🔌 Next Steps: Connect Components to Sanity

Once you've added content in the Studio, I'll update the components to fetch data from Sanity instead of hardcoded values.

The components that will be updated:
- `components/Testimonials.tsx` → Fetch from Sanity
- `components/VideoGallery.tsx` → Fetch from Sanity
- `components/FAQ.tsx` → Fetch from Sanity
- `components/Features.tsx` → Fetch from Sanity
- `components/CourseContent.tsx` → Fetch from Sanity

---

## 🎯 Client Access

Give your client these steps:
1. Go to https://your-domain.com/studio
2. Login with their Sanity account
3. Edit content easily in the beautiful UI
4. Changes appear on the site instantly!

---

## 🔐 Production Deployment

When deploying to production (Vercel/Netlify):
1. Add environment variables in your hosting dashboard
2. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`
3. Deploy!

---

## 📞 Support

If you need help, check:
- Sanity Docs: https://www.sanity.io/docs
- Sanity Slack: https://slack.sanity.io/
