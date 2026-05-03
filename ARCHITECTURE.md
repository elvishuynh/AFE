# Architecture Overview

## Project Structure
```
AFE/
├── public/                 # Static assets
│   ├── *.webp             # Images
│   └── vite.svg           # Favicon
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── service/       # Service-specific components
│   │   │   ├── Ppf.jsx    # Paint Protection Film page
│   │   │   ├── CeramicCoating.jsx
│   │   │   └── ...
│   │   ├── Home.jsx       # Home page sections
│   │   ├── Navbar.jsx     # Navigation
│   │   └── ...
│   ├── hooks/             # Custom React hooks
│   │   ├── useScrollRestoration.js
│   │   └── useComponentVisible.js
│   ├── pages/             # Full page components
│   │   ├── storePage.jsx
│   │   └── socialsPage.jsx
│   ├── _App.jsx           # Alternative app component?
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
└── index.html             # HTML template
```

## Technology Stack
- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Styled Components
- **Routing**: React Router DOM v6
- **Animations**: GSAP
- **Forms**: React Hook Form
- **Icons/Fonts**: Typekit (Adobe Fonts)

## Application Architecture
- **SPA (Single Page Application)** with client-side routing
- **Component-based architecture** with reusable components
- **Custom hooks** for shared logic (scroll restoration, visibility)
- **Dynamic service loading** via route parameters
- **Splash screen** on first visit with session storage persistence

## Routing Structure
- `/` - Home page with sections (home, about, services, contact)
- `/services/:serviceId` - Dynamic service pages (ppf, cc, vw, etc.)
- `/store` - Store page
- `/socials` - Social media page

## Key Components
- **Navbar**: Navigation with dropdown
- **Splash**: Initial loading animation
- **Home**: Hero section
- **About**: Company information
- **Services**: Service overview with links
- **Contact**: Contact form and information
- **DynamicServiceLoader**: Loads service components based on URL

## State Management
- Currently minimal state management
- Uses React hooks (useState, useEffect)
- Session storage for splash screen persistence

## Build and Deployment
- **Development**: `npm run dev` (Vite dev server)
- **Build**: `npm run build` (Vite build)
- **Preview**: `npm run preview`
- **Linting**: ESLint with React plugins

## Future Considerations
- Implement SSR for better SEO
- Add state management (Redux/Zustand) for complex state
- Implement testing (Jest, React Testing Library)
- Add TypeScript for type safety
- Implement PWA features
- Add CMS for content management