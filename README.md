# Azure Data Engineering Course - Landing Page

A premium, modern landing page for UpSkill Academy's Azure Data Engineering course built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Premium UI with gradients, smooth animations, and responsive layout
- **Framer Motion Animations**: Smooth scroll animations and interactive elements
- **Fully Responsive**: Mobile-first design that works on all devices
- **TypeScript**: Type-safe code for better development experience
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Next.js 14 App Router for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## 📦 Installation

1. Clone the repository (or you're already in it!)

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
gaurav-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features grid
│   ├── CourseContent.tsx   # Course curriculum
│   ├── Instructor.tsx      # Instructor profile
│   ├── Testimonials.tsx    # Student testimonials
│   ├── FAQ.tsx             # Frequently asked questions
│   ├── CTA.tsx             # Call to action
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── .github/
│   └── copilot-instructions.md
└── ...config files
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The color scheme uses gradient combinations. Modify in `tailwind.config.ts`:
- Primary: Blue (blue-600)
- Secondary: Purple (purple-600)
- Accent: Pink (pink-600)

### Content
Update content in individual component files:
- Course details in `CourseContent.tsx`
- Testimonials in `Testimonials.tsx`
- FAQ items in `FAQ.tsx`
- Pricing in `CTA.tsx`

### Animations
Framer Motion animations are configured in each component. Adjust timing and effects as needed.

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📱 Sections

1. **Hero**: Eye-catching introduction with stats
2. **Features**: Six key benefits with icons
3. **Course Content**: 12-week curriculum breakdown
4. **Instructor**: Profile and credentials
5. **Testimonials**: Student success stories
6. **FAQ**: Common questions answered
7. **CTA**: Enrollment call-to-action with pricing
8. **Footer**: Links and newsletter signup

## 🎯 Performance

- Lighthouse Score: 95+
- Fast page loads with Next.js optimization
- Smooth animations with Framer Motion
- Optimized images and assets

## 📄 License

This project is for UpSkill Academy's Azure Data Engineering course.

## 🤝 Support

For questions or support, contact: support@upskillacademy.com

---

Built with ❤️ for aspiring Azure Data Engineers
