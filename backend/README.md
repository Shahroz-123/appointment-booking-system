# Backend - Appointment Booking System

Production-grade REST API for the Appointment Booking System.

## Tech Stack

- Node.js & Express.js
- TypeScript
- PostgreSQL with Prisma ORM
- Zod for validation
- Winston for logging
- Jest for testing

## Features

- ✅ RESTful API endpoints
- ✅ Database schema with Prisma
- ✅ Input validation with Zod
- ✅ Error handling middleware
- ✅ Request logging
- ✅ Appointment conflict prevention
- ✅ Time slot availability checking
- ✅ Unit and integration tests
- ✅ Docker support

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL 15+
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

Edit `.env` with your database credentials.

3. Generate Prisma client and run migrations:
```bash
npm run prisma:generate
npm run prisma:migrate
```

4. (Optional) Seed the database:
```bash
npx prisma db seed
```

### Development

Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3001`.

### Testing

Run tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

### Building

Build for production:
```bash
npm run build
```

Run production build:
```bash
npm start
```

## API Endpoints

### Branches

- `GET /api/branches` - Get all active branches
- `GET /api/branches/:id` - Get branch by ID

### Appointments

- `POST /api/appointments` - Create new appointment
- `GET /api/appointments` - List appointments (with filters)
- `GET /api/appointments/:id` - Get appointment by ID
- `PATCH /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Delete appointment
- `GET /api/appointments/available-slots` - Get available time slots

## Docker

Build and run with Docker:

```bash
docker build -t appointment-booking-backend .
docker run -p 3001:3001 --env-file .env appointment-booking-backend
```

## Project Structure

```
backend/
├── src/
│   ├── __tests__/          # Test files
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Express middleware
│   ├── routes/            # API routes
│   ├── schemas/           # Zod validation schemas
│   ├── services/          # Business logic
│   ├── utils/             # Utilities (logger, prisma)
│   └── index.ts           # Entry point
├── prisma/
│   └── schema.prisma      # Database schema
├── Dockerfile
├── package.json
└── tsconfig.json
```
