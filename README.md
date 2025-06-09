# Anahita Website

A modern, responsive website for the Anahita nonprofit organization, built with React and Chakra UI.

## Features

- Responsive design that works on all devices
- Clean, modern UI with accessibility in mind
- Multiple pages including Home, About, Calendar, and Donate
- Easy to customize and extend

## Tech Stack

- React
- TypeScript
- Chakra UI
- React Router
- Vite

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/         # Page components
  ├── assets/        # Static assets
  ├── App.tsx        # Main app component
  └── main.tsx       # Entry point
```

## Development

- The site uses Chakra UI for styling and components
- React Router handles navigation
- TypeScript ensures type safety
- Vite provides fast development and building

## Customization

- Update content in the respective page components
- Modify the theme in `main.tsx`
- Add new pages in the `pages` directory
- Customize styles using Chakra UI's theming system

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## License

MIT
