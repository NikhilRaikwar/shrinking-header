# BitGuardAI - AI-Powered Blockchain Security

*Advanced AI-powered cybersecurity solutions for blockchain and digital assets*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/nikhilraikwars-projects/v0-responsive-header-design)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/HgMUlAyTN4j)

## Overview

BitGuardAI is a comprehensive AI-powered cybersecurity platform designed to protect digital assets and ensure secure transactions in the blockchain ecosystem. The platform features:

- **Real-time Threat Detection**: Advanced ML algorithms for monitoring blockchain transactions
- **Smart Contract Auditing**: Comprehensive vulnerability analysis
- **Wallet Protection**: Multi-layered security protocols
- **Interactive Dashboard**: Real-time analytics and monitoring

## Features

### 🔐 Authentication
- **Clerk Integration**: Secure user authentication with social login options
- **Protected Routes**: Dashboard access requires authentication
- **Seamless Flow**: Connect wallet → Sign in → Dashboard

### 📊 Dashboard
- **Real-time Analytics**: Interactive charts and data visualization
- **Responsive Design**: Works on desktop and mobile devices
- **User Management**: Profile management and settings
- **Data Tables**: Sortable and filterable data with drag-and-drop

### 🎨 UI/UX
- **Modern Design**: Clean, professional interface
- **Dark Theme**: Optimized for security professionals
- **Responsive Header**: Shrinking header with smooth animations
- **Shadcn Components**: High-quality, accessible UI components

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Shadcn/ui
- **Authentication**: Clerk
- **Charts**: Recharts
- **Tables**: TanStack Table
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shrinking-header
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file with your Clerk credentials:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
   CLERK_SECRET_KEY=your_secret_key_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Authentication Flow

1. **Landing Page**: Users see the BitGuardAI homepage with "Connect Wallet" button
2. **Sign In**: Clicking "Connect Wallet" redirects to Clerk sign-in page
3. **Dashboard**: After successful authentication, users are redirected to the dashboard
4. **Protected Routes**: Dashboard and other sensitive areas require authentication

## Project Structure

```
├── app/
│   ├── dashboard/          # Protected dashboard routes
│   ├── sign-in/           # Clerk sign-in pages
│   ├── sign-up/           # Clerk sign-up pages
│   └── globals.css        # Global styles
├── components/
│   ├── ui/               # Shadcn UI components
│   ├── app-sidebar.tsx   # Dashboard sidebar
│   ├── shrinking-header.tsx # Landing page header
│   └── ...               # Other components
├── middleware.ts         # Clerk authentication middleware
└── package.json
```

## Deployment

Your project is live at:

**[https://vercel.com/nikhilraikwars-projects/v0-responsive-header-design](https://vercel.com/nikhilraikwars-projects/v0-responsive-header-design)**

## Development

Continue building your app on:

**[https://v0.dev/chat/projects/HgMUlAyTN4j](https://v0.dev/chat/projects/HgMUlAyTN4j)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
