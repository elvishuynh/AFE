# Development Guide

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
git clone <repository-url>
cd AFE
npm install
```

### Development Server
```bash
npm run dev
```
Opens at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure
See [ARCHITECTURE.md](ARCHITECTURE.md) for detailed project structure.

## Adding New Services

### 1. Create Service Component
Create a new file in `src/components/service/`:
```jsx
import React from 'react';

const NewService = () => {
  return (
    <section className="bg-black text-white">
      {/* Service content */}
    </section>
  );
};

export default NewService;
```

### 2. Add to Dynamic Loader
Update `src/components/DynamicServiceLoader.jsx`:
```jsx
import NewService from './service/NewService';

const serviceComponents = {
  // ... existing services
  newservice: NewService,
};
```

### 3. Add Route (if needed)
Routes are handled dynamically via `:serviceId` parameter.

### 4. Update Services Page
Add link in `src/components/Services.jsx` to `/services/newservice`

## Styling Guidelines

### Tailwind CSS Classes
- Use utility classes for rapid development
- Follow mobile-first responsive design
- Consistent spacing: `py-10`, `px-6`, `gap-8`

### Color Scheme
- Primary: Black background (`bg-black`)
- Text: White (`text-white`)
- Accents: Gray variants for borders/hover states

### Typography
- Font: Azo Sans (loaded via Typekit)
- Headings: `text-4xl`, `text-6xl` for large screens
- Body: `text-lg`, `text-base`

### Animations
- Use GSAP for complex animations
- Consistent timing: 1s duration, staggered delays
- Fade-in from top: `gsap.fromTo(ref, { y: -20 }, { opacity: 1, y: 0, duration: 1 })`

## Component Development

### Best Practices
- Use functional components with hooks
- Destructure props clearly
- Add meaningful comments
- Follow consistent naming (PascalCase for components)
- Use semantic HTML elements

### Props and State
- Keep components stateless when possible
- Use custom hooks for shared logic
- Validate props in development

### Performance
- Use `React.memo` for expensive components
- Optimize images (WebP format, lazy loading)
- Minimize re-renders with proper dependency arrays

## SEO Considerations
See [SEO.md](SEO.md) for detailed SEO guidelines.

### Quick SEO Checklist
- [ ] Dynamic meta tags with react-helmet-async
- [ ] Descriptive alt texts for images
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] Structured data (JSON-LD)
- [ ] Fast loading times

## Testing
```bash
npm run lint
```
Uses ESLint with React rules.

### Future Testing Setup
- Add Jest for unit tests
- React Testing Library for component tests
- Cypress for E2E tests

## Deployment
- Build generates static files in `dist/`
- Deploy to any static hosting (Netlify, Vercel, etc.)
- Consider SSR for better SEO (Vite SSR or Next.js migration)

## Contributing
1. Create feature branch from `main`
2. Make changes following guidelines
3. Test thoroughly
4. Submit pull request

## Common Issues
- **GSAP animations not working**: Ensure refs are attached to correct elements
- **Routing issues**: Check that service IDs match component keys
- **Styling conflicts**: Use Tailwind's responsive prefixes consistently
- **Performance**: Check for unnecessary re-renders in React DevTools