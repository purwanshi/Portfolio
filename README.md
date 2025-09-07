# Portfolio Website

A modern React portfolio built with Vite, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Single Page Application (SPA)
- PDF resume download
- Project showcase
- Contact information
- Skills and achievements display

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- jsPDF (for PDF generation)
- html2canvas

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Netlify

This project is configured for easy deployment on Netlify:

1. **Connect your repository** to Netlify
2. **Build settings** (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy!**

### Manual Deployment

If you prefer manual deployment:

1. Run `npm run build`
2. Upload the `dist` folder to Netlify
3. Set up redirects for SPA routing

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── App.tsx        # Main app component
└── main.tsx       # Entry point
```

## Configuration Files

- `netlify.toml` - Netlify deployment configuration
- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
