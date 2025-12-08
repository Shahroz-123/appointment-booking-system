# Frontend - Appointment Booking System

Production-grade React application for the Appointment Booking System.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Hook Form with Zod validation
- Axios for API calls
- date-fns for date formatting
- React Hot Toast for notifications

## Features

- ✅ Responsive UI with Tailwind CSS
- ✅ Form validation with Zod
- ✅ Real-time available slot checking
- ✅ Customer appointment booking
- ✅ Appointment management
- ✅ Admin dashboard
- ✅ Toast notifications
- ✅ Docker support

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

```bash
cp .env.example .env
```

Edit `.env` with your API URL.

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Testing

Run tests:

```bash
npm test
```

Run tests with UI:

```bash
npm run test:ui
```

### Building

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Docker

Build and run with Docker:

```bash
docker build -t appointment-booking-frontend .
docker run -p 80:80 appointment-booking-frontend
```

## Project Structure

```
frontend/
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── services/         # API service layer
│   ├── types/            # TypeScript types
│   ├── lib/              # Utilities
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── Dockerfile
├── nginx.conf           # Nginx configuration
└── package.json
```

## Available Routes

- `/` - Home page
- `/book` - Book appointment form
- `/appointments` - Customer appointments list
- `/admin` - Admin dashboard
