# Components Documentation

## Overview
This document catalogs all React components in the Auto Film Experts website, their purpose, props, and usage.

## Component Hierarchy

### Main App Components
- **App.jsx**: Root component with routing and splash screen logic
- **_App.jsx**: Alternative app component (purpose unclear)

### Layout Components
- **Navbar.jsx**: Main navigation bar with logo and menu
- **NavDropdown.jsx**: Dropdown menu for navigation items

### Page Components
- **Home.jsx**: Hero section and main landing content
- **About.jsx**: Company information and story
- **Services.jsx**: Overview of available services with links
- **Contact.jsx**: Contact form and business information
- **Splash.jsx**: Initial loading animation screen

### Service Components (in `/service/`)
- **Ppf.jsx**: Paint Protection Film service page
- **CeramicCoating.jsx**: Ceramic coating service page
- **VinylWrapping.jsx**: Vinyl wrapping service page
- **WindowTinting.jsx**: Window tinting service page
- **BrakeCaliper.jsx**: Brake caliper painting service page
- **StarsCeiling.jsx**: Star ceiling installation service page

### Utility Components
- **DynamicServiceLoader.jsx**: Dynamically loads service components based on route

### Page Components (in `/pages/`)
- **storePage.jsx**: E-commerce store page
- **socialsPage.jsx**: Social media links and content page

## Component Details

### App.jsx
**Purpose**: Main application component handling routing and splash screen
**Props**: None
**State**:
- `isSplashActive`: Boolean for splash screen visibility
**Hooks**:
- `useLocation`: For route changes
- `useEffect`: For scroll restoration and splash logic

### Navbar.jsx
**Purpose**: Site navigation
**Props**: `className` (optional CSS classes)
**Features**:
- Responsive design
- Logo linking to home
- Menu items with smooth scrolling

### Ppf.jsx (Example Service Component)
**Purpose**: Detailed page for Paint Protection Film service
**Props**: None
**Features**:
- GSAP animations on load
- Benefits section with grid layout
- Call-to-action button
- Image display
**Hooks**:
- `useScrollRestoration`: Restores scroll position
- `useEffect`: For GSAP animations

### DynamicServiceLoader.jsx
**Purpose**: Router component that loads service pages dynamically
**Props**: None (uses URL params)
**Logic**:
- Maps `serviceId` from URL to component
- Fallback to "Service not found" message

## Custom Hooks

### useScrollRestoration.js
**Purpose**: Restores scroll position when navigating back
**Usage**: `useScrollRestoration()`
**Implementation**: Uses sessionStorage to save/restore scroll position

### useComponentVisible.js
**Purpose**: Manages visibility state for dropdowns/modals
**Usage**: Returns `[ref, isVisible, setIsVisible]`
**Implementation**: Click outside detection using refs

## Styling Approach
- **Tailwind CSS**: Utility-first CSS framework
- **Styled Components**: For complex component-specific styles
- **GSAP**: For animations and transitions
- **Custom Fonts**: Typekit fonts loaded in index.html

## Component Patterns
- **Functional Components**: All components use modern React patterns
- **Hooks**: State and effects managed with React hooks
- **Refs**: Used for GSAP animations and DOM manipulation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Future Development
- Consider adding PropTypes or TypeScript for prop validation
- Implement component testing
- Add loading states and error boundaries
- Consider component composition patterns for reusability