# NeoSocial 🎨

A bold, playful social media application built with Neo-Brutalism design principles. Featuring thick borders, hard shadows, bright accent colors, and smooth animations.

![Neo-Brutalism Design](https://img.shields.io/badge/Design-Neo--Brutalism-orange)
![Next.js 15](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)
![Supabase](https://img.shields.io/badge/Supabase-Realtime-green)

## ✨ Features

### Authentication
- Email/password authentication
- Google OAuth integration
- Password reset flow
- Protected routes
- Persistent sessions

### Social Feed
- Stories section with auto-expiring content
- Create posts with text, images, and drag-drop uploads
- Like, comment, and share functionality
- Infinite scrolling
- Real-time updates

### Profile System
- Customizable profiles with avatars
- Bio, location, and website
- Followers/following counts
- Post grid with tabs (Posts, Saved, Liked)
- Edit profile settings

### Real-time Chat
- One-on-one messaging
- Typing indicators
- Read receipts
- Image sharing in messages
- Online status indicators
- Mobile-responsive chat UI

### Explore & Discovery
- Search users, posts, and hashtags
- Trending topics
- Suggested users to follow
- Discover content grid

### Notifications
- Real-time notification system
- Like, comment, follow, mention alerts
- Unread count badges
- Mark all as read

### Design System
- **Neo-Brutalism UI**: Thick 3px black borders everywhere
- **Hard shadows**: 8px offset with no blur
- **Bright accents**: Orange (#FF5A1F), Yellow (#F7C400), Pink (#F28CA8)
- **Playful typography**: Poppins + Space Grotesk
- **Smooth animations**: Framer Motion page transitions
- **Dark mode**: Full dark theme support

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Backend**: Supabase (Auth + Database + Realtime + Storage)
- **State**: Zustand
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 📁 Project Structure

```
neo-social/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Auth group (login, register, forgot-password)
│   │   ├── (main)/             # Main app group (feed, explore, chat, etc.)
│   │   ├── api/                # API routes
│   │   ├── layout.tsx          # Root layout with fonts & theme
│   │   ├── page.tsx            # Home redirect
│   │   ├── loading.tsx         # Loading state
│   │   ├── error.tsx           # Error boundary
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── NeoButton.tsx
│   │   │   ├── NeoCard.tsx
│   │   │   ├── NeoInput.tsx
│   │   │   ├── NeoTextarea.tsx
│   │   │   ├── NeoAvatar.tsx
│   │   │   └── Skeleton.tsx
│   │   ├── layout/             # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── MobileBottomNav.tsx
│   │   │   └── MainLayout.tsx
│   │   ├── auth/               # Auth components
│   │   │   ├── AuthCard.tsx
│   │   │   └── SocialLogin.tsx
│   │   ├── feed/               # Feed components
│   │   │   ├── Stories.tsx
│   │   │   ├── CreatePost.tsx
│   │   │   └── PostCard.tsx
│   │   ├── chat/               # Chat components
│   │   │   ├── ChatList.tsx
│   │   │   └── ChatWindow.tsx
│   │   ├── profile/            # Profile components
│   │   │   ├── ProfileHeader.tsx
│   │   │   └── ProfileTabs.tsx
│   │   ├── explore/            # Explore components
│   │   │   ├── SearchBar.tsx
│   │   │   └── TrendingGrid.tsx
│   │   ├── notifications/      # Notification components
│   │   │   └── NotificationCard.tsx
│   │   └── stories/            # Story components
│   │       └── StoryViewer.tsx
│   ├── hooks/                  # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── usePosts.ts
│   │   ├── useChat.ts
│   │   └── useRealtime.ts
│   ├── lib/                    # Utilities & configs
│   │   ├── utils.ts
│   │   └── supabase/
│   │       ├── client.ts
│   │       ├── server.ts
│   │       └── middleware.ts
│   ├── store/                  # Zustand store
│   │   └── useAppStore.ts
│   ├── types/                  # TypeScript types
│   │   └── index.ts
│   └── styles/                 # Additional styles
├── supabase/
│   └── migrations/
│       └── 00000000000000_init.sql
├── public/                     # Static assets
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/neo-social.git
cd neo-social
npm install
```

### 2. Environment Variables

Create a `.env.local` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Run the migration file in the SQL Editor:
   ```bash
   # Or use Supabase CLI
   supabase db reset
   ```
3. Enable Google OAuth in Authentication > Providers
4. Configure storage buckets: avatars, posts, messages, stories

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment (Vercel)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/neo-social.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Import project on [vercel.com](https://vercel.com)
2. Add environment variables in Project Settings
3. Deploy!

```bash
# Or use Vercel CLI
vercel --prod
```

### 3. Update Supabase Redirect URLs

In Supabase Authentication > URL Configuration:
- Site URL: `https://your-app.vercel.app`
- Redirect URLs: `https://your-app.vercel.app/api/auth/callback`

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5F1E8` | Page background |
| Orange | `#FF5A1F` | Primary accent, CTAs |
| Yellow | `#F7C400` | Secondary accent |
| Pink | `#F28CA8` | Tertiary accent, likes |
| Black | `#000000` | Borders, text |
| White | `#FFFFFF` | Cards, inputs |

### Shadows
```css
shadow-neo: 8px 8px 0px 0px #000000
shadow-neo-sm: 4px 4px 0px 0px #000000
shadow-neo-lg: 12px 12px 0px 0px #000000
```

### Borders
- Width: 3px (`border-neo`)
- Color: Black (`#000000`)
- Radius: 16px (`rounded-neo`), 24px (`rounded-neo-lg`)

### Typography
- **Headings**: Space Grotesk (700 weight)
- **Body**: Poppins (400, 500 weight)

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, bottom nav |
| Tablet | 640-1024px | Two columns, sidebar hidden |
| Desktop | > 1024px | Three columns, full sidebar |
| Wide | > 1280px | Four columns, right widgets |

## 🔧 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run db:types   # Generate Supabase types
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Credits

- Design inspired by Neo-Brutalism movement
- Icons by [Lucide](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com)

---

Built with ❤️ and bold shadows by the NeoSocial team
