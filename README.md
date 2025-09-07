# Blinkit-Clone

A clone of the Blinkit grocery delivery app built with React, Vite, and Tailwind CSS.

## Features
- Home page with top sellers, product categories, and dairy items
- Search functionality for products
- Organized components and context for state management
- Responsive design using Tailwind CSS

## Project Structure
```
src/
  ├── assets/           # Static assets (e.g., images, SVGs)
  ├── components/       # Reusable React components
  │     ├── DairyItems.jsx
  │     ├── Footer.jsx
  │     ├── ProdCategory.jsx
  │     ├── Products.jsx
  │     ├── Search/
  │     │     └── Search.jsx
  │     ├── Snacks.jsx
  │     ├── TopSeller.jsx
  ├── context/          # Context providers and state management
  │     ├── contextToggle.js
  │     └── products/
  │           ├── ProductContext.js
  │           └── ProductProvider.jsx
  ├── App.jsx           # Main app component
  ├── main.jsx          # Entry point
  ├── index.css         # Global styles
```

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) to view the app.

## License
This project is for educational purposes only and is not affiliated with Blinkit.