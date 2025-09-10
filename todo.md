# edusyntax EdTech Website - MVP Development Plan

## Core Files to Create/Modify:

### 1. Configuration & Setup
- `tailwind.config.ts` - Custom brand colors and fonts
- `next.config.js` - Next.js optimization settings
- `package.json` - Add required dependencies

### 2. Layout & Navigation
- `src/components/layout/Navbar.tsx` - Main navigation with sticky CTA
- `src/components/layout/Footer.tsx` - Footer with links and branding
- `src/components/layout/Layout.tsx` - Main layout wrapper

### 3. Core Components
- `src/components/ui/Hero.tsx` - Main hero section with CTA
- `src/components/ui/CourseCard.tsx` - Course display cards
- `src/components/ui/TestimonialCarousel.tsx` - Student testimonials
- `src/components/ui/LeadForm.tsx` - Lead capture form with Google Sheets
- `src/components/ui/StickyCTA.tsx` - Sticky call-to-action bar

### 4. Pages (App Router)
- `src/app/page.tsx` - Homepage (Hero, Courses, Outcomes, Testimonials)
- `src/app/courses/page.tsx` - Courses overview
- `src/app/courses/fullstack-development/page.tsx` - Fullstack course detail
- `src/app/blog/page.tsx` - Blog listing page
- `src/app/sitemap.xml/route.ts` - Dynamic sitemap generation

### 5. SEO & Performance
- `src/app/layout.tsx` - Root layout with meta tags and structured data
- `src/lib/seo.ts` - SEO utilities and structured data schemas
- `public/robots.txt` - Search engine directives

## Key Features to Implement:
1. Custom brand colors and Poppins/Roboto fonts
2. Framer Motion animations for hero and cards
3. Google Sheets API integration for lead forms
4. SEO-optimized meta tags and structured data
5. Responsive design with mobile-first approach
6. Performance optimization with Next.js Image
7. Accessibility compliance (WCAG AA+)
8. Lead generation with urgency elements

## MVP Scope:
- Homepage with all key sections
- One detailed course page (Fullstack Development)
- Blog page structure
- Lead form integration
- SEO optimization
- Mobile responsive design