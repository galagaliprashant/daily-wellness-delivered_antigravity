# Daily Wellness Delivered - Food Tracker App

## 🎯 Project Overview

**Daily Wellness Delivered** is a modern, mobile-first food delivery and meal tracking application built with React, TypeScript, and Tailwind CSS. The app helps users manage their healthy meal subscriptions, track deliveries, manage wallet balance, and customize their meal plans.

## 🚀 Tech Stack

- **Framework**: Vite + React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router v6
- **State Management**: React Query (@tanstack/react-query)
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Testing**: Vitest + Testing Library

## 📱 Current Features

### 1. **Home Dashboard** (`/`)
- Personalized greeting with user name
- Wallet balance display with low balance warning
- Today's meal delivery card with status tracking
- Quick action buttons (Pause, Schedule, Address, Support)
- Upcoming deliveries preview
- Subscription status with progress bar
- Bottom navigation bar

### 2. **Subscription Management** (`/subscription`)
- View current subscription plan details
- Track remaining days
- Manage subscription settings

### 3. **Wallet** (`/wallet`)
- View wallet balance
- Transaction history
- Add funds functionality
- Transaction filtering (credit/debit/refund)

### 4. **Account Settings** (`/account`)
- User profile management
- Phone number display
- Account preferences

### 5. **Pause Subscription** (`/pause`)
- Temporarily pause meal deliveries
- Select pause duration
- View pause impact on subscription

### 6. **Delivery Tracking** (`/tracking`)
- Real-time delivery status
- Estimated delivery time
- Delivery person details

### 7. **Meal Customization** (`/customize`)
- Browse available meals
- Swap meals for upcoming days
- View nutritional information
- Filter by dietary preferences

### 8. **Address Management** (`/address`)
- Add/edit delivery addresses
- Set default address
- Manage multiple locations

### 9. **Notifications** (`/notifications`)
- View delivery updates
- Subscription alerts
- Promotional messages

### 10. **Login** (`/login`)
- User authentication
- Phone number verification

## 📂 Project Structure

```
Food_tracker_App/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images and media files
│   │   ├── meal-chicken-salad.jpg
│   │   ├── meal-buddha-bowl.jpg
│   │   ├── meal-salmon.jpg
│   │   ├── meal-mediterranean-wrap.jpg
│   │   └── meal-stir-fry.jpg
│   ├── components/
│   │   ├── home/            # Home page components
│   │   │   ├── WalletCard.tsx
│   │   │   ├── TodaysMealCard.tsx
│   │   │   ├── QuickActions.tsx
│   │   │   └── UpcomingDeliveries.tsx
│   │   ├── layout/          # Layout components
│   │   │   ├── AppLayout.tsx
│   │   │   └── BottomNav.tsx
│   │   ├── ui/              # shadcn/ui components (50+ components)
│   │   └── NavLink.tsx
│   ├── data/
│   │   └── mockData.ts      # Mock data for development
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Route pages
│   │   ├── HomePage.tsx
│   │   ├── SubscriptionPage.tsx
│   │   ├── WalletPage.tsx
│   │   ├── AccountPage.tsx
│   │   ├── PausePage.tsx
│   │   ├── TrackingPage.tsx
│   │   ├── CustomizePage.tsx
│   │   ├── AddressPage.tsx
│   │   ├── NotificationsPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── test/                # Test files
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design System

### Color Scheme
- **Primary**: Soft green (#10b981 / Emerald)
- **Background**: Light neutral tones
- **Cards**: Subtle backgrounds with soft shadows
- **Text**: High contrast for readability

### UI Patterns
- **Mobile-first design**: Optimized for mobile devices
- **Bottom navigation**: Easy thumb-reach navigation
- **Card-based layout**: Clean, organized content sections
- **Micro-interactions**: Smooth transitions and hover effects
- **Status indicators**: Color-coded delivery statuses

## 📊 Data Models

### User
```typescript
{
  id: string
  name: string
  phone: string
  defaultAddressId: string
  walletBalance: number
}
```

### Meal
```typescript
{
  id: string
  name: string
  description: string
  calories: number
  imageUrl: string
  tags: string[]  // e.g., "High Protein", "Vegan", "Low Carb"
}
```

### DayPlan
```typescript
{
  date: Date
  meal: Meal | null
  status: 'scheduled' | 'out-for-delivery' | 'delivered' | 'paused'
  isEditable: boolean
  deliveryTime?: string
}
```

### Subscription
```typescript
{
  id: string
  planName: string
  totalDays: number
  remainingDays: number
  startDate: Date
  endDate: Date
  mealsPerDay: number
  isActive: boolean
}
```

## 🔧 Development

### Available Scripts

```bash
# Install dependencies
npm install

# Start development server (running on http://localhost:8080)
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Run linter
npm run lint

# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Preview production build
npm preview
```

### Current Status
✅ Development server running on `http://localhost:8080/`
✅ All dependencies installed
✅ Core pages implemented
✅ Mock data configured
✅ Routing configured
✅ UI components ready

## 🎯 Next Steps & Potential Enhancements

### Backend Integration
- [ ] Connect to real API endpoints
- [ ] Implement authentication (JWT/OAuth)
- [ ] Set up database integration
- [ ] Add payment gateway integration

### Features to Add
- [ ] Push notifications
- [ ] Meal rating and feedback system
- [ ] Referral program
- [ ] Calorie tracking dashboard
- [ ] Weekly/monthly nutrition reports
- [ ] Social sharing features
- [ ] Favorite meals list
- [ ] Dietary restrictions management
- [ ] Allergy alerts
- [ ] Recipe details and ingredients

### Technical Improvements
- [ ] Add loading states and skeletons
- [ ] Implement error boundaries
- [ ] Add offline support (PWA)
- [ ] Optimize images (lazy loading, WebP)
- [ ] Add analytics tracking
- [ ] Implement A/B testing
- [ ] Add comprehensive unit tests
- [ ] Add E2E tests with Playwright
- [ ] Set up CI/CD pipeline
- [ ] Add Storybook for component documentation

### UX Enhancements
- [ ] Add onboarding flow for new users
- [ ] Implement dark mode
- [ ] Add animations and transitions
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Add multi-language support
- [ ] Implement voice commands
- [ ] Add haptic feedback for mobile

## 🐛 Known Issues

⚠️ **Security Vulnerabilities**: 8 vulnerabilities detected (4 moderate, 4 high)
- Run `npm audit fix` to address issues

## 📝 Mock Data

The app currently uses mock data from `src/data/mockData.ts`:
- **User**: Priya with ₹1,250 wallet balance
- **Meals**: 5 different meal options with images
- **Subscription**: 30-day "Healthy Essentials" plan (18 days remaining)
- **Transactions**: Sample wallet transactions
- **Addresses**: Home and Office addresses
- **Delivery Slots**: 3 time slots for delivery

## 🎨 UI Components Available

The app includes 50+ shadcn/ui components:
- Accordion, Alert Dialog, Avatar, Button, Card, Checkbox
- Dialog, Dropdown Menu, Form, Input, Label, Select
- Tabs, Toast, Tooltip, Progress, Slider, Switch
- And many more...

## 📱 Responsive Design

- **Mobile**: Primary target (320px - 768px)
- **Tablet**: Optimized layout (768px - 1024px)
- **Desktop**: Centered max-width container

## 🔐 Environment Setup

Currently no environment variables required. When integrating backend:
- Create `.env` file
- Add API endpoints
- Add authentication keys
- Add payment gateway credentials

## 📞 Support

For questions or issues, contact the development team.

---

**Last Updated**: January 28, 2026
**Version**: 0.0.0
**Status**: Development
