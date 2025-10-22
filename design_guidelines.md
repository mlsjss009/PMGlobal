# Design Guidelines: Professional Project Manager Portfolio

## Design Approach & Philosophy

**Reference-Based Approach:** Drawing inspiration from premium professional consulting portfolios (Ricardo Vargas, McKinsey, Bain) combined with modern design system principles for credibility and sophistication.

**Core Principles:**
- **Executive Presence:** Polished, authoritative visual language that commands respect
- **Global Credibility:** Design choices that resonate across international markets
- **Content Hierarchy:** Clear visual organization showcasing expertise and achievements
- **Minimal Distraction:** Sophisticated restraint - let accomplishments speak loudly

## Color Palette

**Light Mode:**
- Primary: 220 15% 25% (Deep navy - authority and trust)
- Secondary: 220 10% 45% (Slate gray - professional neutrality)
- Accent: 200 95% 40% (Rich teal - innovation and global reach)
- Background: 0 0% 98% (Off-white - clean canvas)
- Surface: 0 0% 100% (Pure white - card backgrounds)
- Text Primary: 220 15% 20%
- Text Secondary: 220 10% 45%

**Dark Mode:**
- Primary: 220 20% 85% (Light navy - maintains hierarchy)
- Secondary: 220 8% 65% (Muted slate)
- Accent: 200 85% 55% (Bright teal - pops against dark)
- Background: 220 15% 10% (Rich dark navy)
- Surface: 220 12% 14% (Elevated dark cards)
- Text Primary: 220 10% 90%
- Text Secondary: 220 8% 70%

## Typography

**Font Families:**
- Headlines: 'Inter' (700, 600 weights) - Modern, authoritative
- Body: 'Inter' (400, 500 weights) - Professional readability
- Accent/Stats: 'Roboto Mono' (500) - Technical precision for numbers

**Scale:**
- Hero Headline: text-5xl lg:text-7xl (bold, commanding presence)
- Section Headers: text-3xl lg:text-5xl (clear hierarchy)
- Card Titles: text-xl lg:text-2xl (prominent but balanced)
- Body Text: text-base lg:text-lg (optimal reading)
- Captions: text-sm (supporting information)

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 consistently
- Section padding: py-16 md:py-24 lg:py-32
- Card spacing: p-6 md:p-8
- Grid gaps: gap-6 md:gap-8 lg:gap-12

**Container Strategy:**
- Max-width: max-w-7xl mx-auto
- Content sections: px-6 md:px-12
- Text-heavy content: max-w-4xl mx-auto

## Component Library

**Navigation:**
- Sticky header with subtle backdrop blur
- Logo + horizontal menu (desktop) / hamburger (mobile)
- CTA button "Get in Touch" in accent color
- Dropdown menus for Services/Industries (if applicable)

**Hero Section:**
- Full-width with professional headshot (right side on desktop)
- Compelling headline emphasizing global experience
- Subheadline with credentials/years of experience
- Dual CTAs: Primary "View Portfolio" + Secondary "Contact Me"
- Client logo ticker below (subtle, grayscale)
- Background: Subtle gradient from primary to darker shade

**Project Showcase Cards:**
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Company logo at top, project title, brief description
- Key metrics displayed prominently (budget, timeline, impact)
- "View Case Study" link in accent color
- Hover effect: subtle lift (translate-y-1) and shadow increase

**Services Section:**
- Clean card grid showcasing consulting offerings
- Icon + Title + Description + "Learn More" link
- Categories: Strategy, PMO Setup, Crisis Management, Digital Transformation

**Client Testimonials:**
- Horizontal scroll carousel (desktop) / stacked (mobile)
- Quote + headshot + name + title + company
- Navigation dots below
- Background: subtle surface color differentiation

**Statistics Bar:**
- 4-column grid displaying key numbers
- Large mono font for numbers, small caps for labels
- "$20B+ Managed" | "100+ Projects" | "17+ Countries" | "20+ Years"

**Contact Section:**
- Two-column layout: Form (left) + Info (right)
- Form fields: Name, Email, Company, Message
- Right side: Contact methods, timezone/availability, LinkedIn/social links
- Professional headshot with availability indicator

**Footer:**
- Three columns: About snippet, Quick Links, Newsletter signup
- Social media icons (LinkedIn, Twitter prominent)
- Copyright and credentials
- Background: Darker shade of surface color

## Images

**Hero Image:**
- Professional executive portrait (high-quality, well-lit)
- Placement: Right side of hero section (desktop), above headline (mobile)
- Treatment: Subtle vignette, professional color grading
- Alternative: Use abstract geometric pattern if no photo available

**Client Logos:**
- Grayscale treatment for cohesion
- Displayed in scrolling ticker below hero
- Also in dedicated "Trusted By" section with 8-12 logos in grid

**Case Study Images:**
- Project-related imagery (buildings, teams, success moments)
- Consistent 16:9 aspect ratio
- Subtle overlay with project details on hover

**Background Patterns:**
- Subtle dot grid or mesh gradient in hero section
- Geometric shapes in accent color at 5% opacity for visual interest in service sections

## Key Page Sections (in order)

1. **Navigation** - Sticky header
2. **Hero** - Executive introduction with headshot and CTAs
3. **Client Logos** - Scrolling ticker of companies worked with
4. **About/Value Proposition** - Expertise and unique approach
5. **Key Statistics** - Impressive numbers in bold display
6. **Featured Projects** - 3-6 case studies in card grid
7. **Services** - Consulting offerings in clean cards
8. **Industries Served** - Icon grid of sectors
9. **Testimonials** - Carousel with client feedback
10. **Call-to-Action** - "Ready to transform your projects?" with contact button
11. **Contact Form** - Two-column form and info section
12. **Footer** - Links, social, newsletter

**Critical Design Notes:**
- Maintain generous whitespace - professional portfolios breathe
- Use subtle animations only on cards (hover states) - no distracting scroll effects
- Ensure all form inputs have consistent dark mode styling
- Button hierarchy: Solid primary for main CTAs, outline secondary for alternative actions
- All blurred button backgrounds over images use backdrop-blur-sm with bg-white/10 dark:bg-black/20