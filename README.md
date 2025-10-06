# ShopWave — Minimal eCommerce Frontend

A simple, modern React + Vite eCommerce demo with Tailwind CSS. Built for learning and rapid prototyping.

License: MIT

## Quick start

1. Install dependencies  
   npm install

2. Run dev server  
   npm run dev

3. Build for production  
   npm run build

See scripts in [package.json](package.json).

## What’s inside

- App entry: [`src/main.tsx`](src/main.tsx) → [`App`](src/App.tsx) ([routes & layout](src/App.tsx))
- UI layout: [`components/layout/Layout.tsx`](src/components/layout/Layout.tsx), [`Navbar`](src/components/layout/Navbar.tsx), [`Footer`](src/components/layout/Footer.tsx)
- Product list & mock data: [`ProductCard`](src/components/products/ProductCard.tsx), [`MockProducts`](src/components/products/Mockproducts.tsx)
- State & auth: [`CartProvider`](src/context/CartContext.tsx), [`AuthProvider`](src/context/AuthContext.tsx), hooks [`useCartContext`](src/context/Usecontext.tsx), [`UseAuthCont`](src/context/UseauthContext.tsx)
- Routing & protection: [`ProtectedRoutes`](src/components/auth/ProtectedRoute.tsx)
- Vite config: [vite.config.ts](vite.config.ts)

## Notes

- Styling via Tailwind CSS (see [vite.config.ts](vite.config.ts) and [src/index.css](src/index.css)).
- Static assets are in the `public/` folder and referenced from components.
- This repo is intended as a UI demo — authentication and payments are mocked.