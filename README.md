# 🚗 Car App

A modern full-stack **Car Application** with role-based access for **Normal Users** and **Admins**.

This project demonstrates a scalable and secure architecture using cutting-edge technologies.

---

## 🔧 Tech Stack

- ⚡ **Next.js** – for server-side rendering and routing  
- 🎨 **Tailwind CSS** – for responsive, utility-first UI design  
- 🛢️ **Supabase** – for authentication, database, and real-time backend services  
- 🛡️ **Arcjet** – for advanced security and access control  

---

## 🔑 Key Features

- ✅ Role-based access control with dedicated flows for **Users** and **Admins**
- 🔐 Secure authentication & authorization using **Arcjet**
- 📡 Real-time data sync with **Supabase**
- 💻 Clean and responsive UI with **Tailwind CSS**
- 🧩 **shadcn/ui** – for reusable, accessible, and elegant UI components  
- 🚀 Built with scalability and maintainability in mind

---


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.


---


## 🛠️ Environment Variables

Make sure to set the following environment variables in a `.env` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
DATABASE_URL=
DIRECT_URL=

ARCJET_KEY=

GEMINI_API_KEY=

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

