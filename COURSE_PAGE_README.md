# Course Page Integration with Graphy API

## Overview
Dynamic course details page that fetches course data from Graphy API.

## Setup Complete ✅

### 1. Environment Variables (`.env.local`)
```env
NEXT_PUBLIC_GRAPHY_MID="gauravkurhekar"
NEXT_PUBLIC_GRAPHY_API_KEY="fd25e31d-0853-4213-90df-f6f22ca87591"
NEXT_PUBLIC_COURSE_ID="6870e4c48934024a7cb52be6"
```

### 2. Files Created

#### API Client
- `lib/graphy.ts` - Graphy API client with TypeScript types

#### Course Page Components
- `app/course/page.tsx` - Main course page (Server Component)
- `components/course/CourseHero.tsx` - Hero section with course overview
- `components/course/CourseFeatures.tsx` - What you'll learn section
- `components/course/CourseCurriculum.tsx` - Module breakdown with accordion
- `components/course/CourseInstructor.tsx` - Instructor profile
- `components/course/CourseCTA.tsx` - Enrollment call-to-action

## Features

### Dynamic Data Fetching
- Fetches course details from Graphy API using Merchant ID and API Key
- Fallback data included for when API is unavailable
- Server-side rendering for better SEO

### Course Page Sections
1. **Hero Section**
   - Course title, description
   - Rating, students count, duration, language
   - Instructor preview
   - Enrollment CTA buttons

2. **Features Section**
   - 6 key learning areas with icons
   - 8 learning outcomes checklist

3. **Curriculum Section**
   - 30 modules displayed as accordion
   - Module numbers and titles
   - Expandable lesson lists (when available from API)

4. **Instructor Section**
   - Profile image
   - Bio and quote
   - Experience, certifications, credentials
   - LinkedIn connection

5. **CTA Section**
   - Pricing display
   - Benefits grid
   - Enrollment button
   - Trust badges

## Graphy API Integration

### API Endpoints Used
```
GET https://api.graphy.com/v1/products/{courseId}
GET https://api.graphy.com/v1/products (all courses)
```

### Headers Required
```
Content-Type: application/json
MID: {merchant_id}
Authorization: Bearer {api_key}
```

### API Response Structure
The API should return course data including:
- Course ID, name, description
- Price and currency
- Instructor information
- Module structure with lessons
- Features list
- Student count, rating

## Usage

### Access the Course Page
```
http://localhost:3000/course
```

### Modify Course ID
Change the course ID in `.env.local`:
```env
NEXT_PUBLIC_COURSE_ID="your-course-id"
```

### Update Fallback Data
If API doesn't return complete data, modify the fallback in:
```
app/course/page.tsx (line 18-90)
```

## Enrollment Flow
1. User clicks "Enroll Now" button
2. Redirects to Graphy checkout page:
   ```
   https://www.upskillacademy.co.in/single-checkout/{courseId}?pid=p1
   ```

## Next Steps

### Test API Connection
1. Verify the Graphy API credentials are correct
2. Check API response structure matches our TypeScript types
3. Update `lib/graphy.ts` if API structure differs

### Customize Design
- Modify colors in Tailwind classes
- Update animations in Framer Motion configs
- Change layout in component files

### Add More Features
- Course reviews/testimonials
- FAQ section
- Preview lessons
- Related courses

## Troubleshooting

### API Not Working?
- Check MID and API Key are correct
- Verify Graphy API is on Advanced Plan
- Check API endpoint URLs
- Look for CORS issues in browser console

### Fallback Data Showing?
- API might be down or slow
- Check browser console for errors
- Verify network requests in DevTools

## Notes
- All components use Framer Motion for animations
- Responsive design for mobile, tablet, desktop
- SEO-optimized with proper metadata
- Tailwind CSS for styling
- TypeScript for type safety
