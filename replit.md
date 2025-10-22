# Professional Project Management Portfolio

## Overview

This is a professional portfolio website for an independent project management consultant. The application showcases global expertise, featured projects, industry experience, client testimonials, and consulting services. Built as a modern single-page application with a premium, executive-level design aesthetic inspired by professional consulting portfolios (McKinsey, Bain, Ricardo Vargas).

The site emphasizes credibility, authority, and global reach through sophisticated visual design, comprehensive content sections, and polished user interactions including light/dark theme support.

## Recent Changes

**October 22, 2025** - Initial Replit Environment Setup
- Installed all npm dependencies (717 packages)
- Created `.gitignore` file for Node.js project
- Fixed TypeScript schema for password insertion (made `id`, `used`, and `createdAt` optional in InsertPassword)
- Created placeholder stock images in `attached_assets/stock_images/` directory
- Created placeholder headshot images (ceo-headshot.png, coowner-headshot.png)
- Fixed Next.js Link imports (removed from FeaturedProjects.tsx and Hero.tsx as project uses Wouter)
- Configured development workflow to run on port 5000
- Configured deployment settings (VM deployment with build and production start scripts)
- Server running successfully with in-memory storage (Telegram bot disabled - requires TELEGRAM_BOT_TOKEN)
- Website displays lock page with password authentication feature

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (single-page application)

**UI Component System:**
- Shadcn/ui component library following the "New York" style variant
- Radix UI primitives for accessible, unstyled component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for managing component variants
- Custom CSS variables for theming (light/dark mode support)

**State Management:**
- React Query (TanStack Query) for server state management and data fetching
- React Hook Form with Zod for form validation and state
- React Context for theme state (ThemeProvider)

**Design System:**
- Custom color palette with professional navy/teal accent colors
- Typography using Inter (headings/body) and Roboto Mono (statistics)
- Consistent spacing scale based on Tailwind's 4px increments
- Elevation system using CSS custom properties (--elevate-1, --elevate-2)
- Comprehensive light/dark mode with HSL color definitions

### Backend Architecture

**Server Framework:**
- Express.js for HTTP server and API routing
- Node.js runtime with ES modules
- Development/production environment separation

**Development Setup:**
- Vite middleware integration for HMR in development
- Custom logging middleware for API request tracking
- Error handling middleware for consistent error responses

**Storage Layer:**
- In-memory storage implementation (MemStorage class) as current default
- Interface-based design (IStorage) allowing easy swap to database
- User entity with basic CRUD operations (getUser, getUserByUsername, createUser)

### Data Schema

**Database Configuration (Drizzle ORM):**
- PostgreSQL dialect configured via Drizzle Kit
- Schema-first approach with TypeScript type inference
- Zod integration for runtime validation
- Migration support through drizzle-kit

**Current Schema:**
- Users table with UUID primary keys, username, and password fields
- Schema uses Drizzle's type inference for compile-time type safety
- Insert schemas generated via drizzle-zod for validation

**Database Pattern:**
- Storage interface abstraction allows switching between in-memory and PostgreSQL
- Connection configuration via DATABASE_URL environment variable
- Session management prepared with connect-pg-simple

### Styling & Theme Architecture

**CSS Architecture:**
- Global CSS with Tailwind directives
- CSS custom properties for dynamic theming
- Component-scoped styles where needed
- Hover/active states using elevation variables

**Theme System:**
- HSL color space for all theme colors enabling opacity modifiers
- Dual theme support (light/dark) with localStorage persistence
- Theme toggle component with animated icon transitions
- Automatic class application to document root

**Responsive Design:**
- Mobile-first approach with Tailwind breakpoints (md: 768px, lg: 1024px)
- Custom mobile detection hook (useIsMobile)
- Responsive typography scaling
- Adaptive layouts for navigation, hero, and content sections

### Component Architecture

**Page Structure:**
- Single-page layout with section-based navigation
- Smooth scroll navigation between sections
- Component composition pattern (Navigation, Hero, About, Projects, Services, Industries, Testimonials, ContactForm, Footer)

**Reusable Components:**
- Comprehensive UI component library in /components/ui
- Example components for development/testing in /components/examples
- Custom business components in /components root

**Key Features:**
- Image carousel in Hero section with timed transitions
- Testimonial carousel with manual navigation
- Contact form with validation (not connected to backend)
- Client logo showcase
- Statistics display
- Project cards with featured highlighting
- Service cards with icons

### Asset Management

**Static Assets:**
- Stock images stored in attached_assets/stock_images
- Vite alias (@assets) for asset imports
- Professional business imagery for hero, projects, and testimonials
- Social media icons via react-icons (Simple Icons)
- Lucide React for UI icons

## External Dependencies

### Core Framework Dependencies
- **React & React DOM**: UI framework
- **TypeScript**: Type safety and developer experience
- **Vite**: Build tool and dev server
- **Express**: Backend HTTP server

### UI Component Libraries
- **Radix UI**: Accessible component primitives (accordion, dialog, dropdown, navigation, popover, select, tabs, toast, tooltip, etc.)
- **Shadcn/ui**: Pre-styled component system built on Radix
- **Lucide React**: Icon library for UI elements
- **React Icons**: Social media and brand icons

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Data Fetching & State
- **TanStack React Query**: Server state management
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **Drizzle Zod**: Schema validation integration

### Database
- **@neondatabase/serverless**: PostgreSQL driver (Neon-compatible)
- **connect-pg-simple**: PostgreSQL session store for Express

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing
- **Class Variance Authority**: Component variant management
- **clsx & tailwind-merge**: Conditional class name utilities

### Development Tools
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development tooling

### Additional Libraries
- **wouter**: Lightweight routing
- **date-fns**: Date manipulation utilities
- **embla-carousel-react**: Carousel/slider functionality
- **cmdk**: Command menu component
- **nanoid**: Unique ID generation

### Typography
- **Google Fonts**: Inter (primary) and Roboto Mono (monospace for numbers)