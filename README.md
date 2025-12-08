# Appointment Booking System

A production-grade full-stack appointment booking system built with React, TypeScript, Node.js, Express, PostgreSQL, and Docker.

## ✅ Verified & Production Ready

**Status**: All tests passing ✅ | Builds successful ✅ | Ready for deployment 🚀

> See [TEST_RESULTS.md](TEST_RESULTS.md) for complete test verification report.

## 📋 Features

### Customer Features
- **Easy Appointment Booking**: Intuitive interface for scheduling appointments
- **Branch Selection**: Choose from multiple branch locations
- **Real-time Availability**: View available time slots in real-time
- **Conflict Prevention**: Automatic detection of booking conflicts
- **Email Confirmations**: Simulated confirmation notifications
- **Appointment Management**: View, track, and cancel appointments
- **Appointment History**: Complete history of all bookings

### Admin Features
- **Dashboard**: Overview of all appointments with statistics
- **Status Management**: Update appointment statuses
- **Search & Filter**: Find appointments by customer details or status
- **Branch Management**: View branch information

### Technical Features
- ✅ Production-grade code quality
- ✅ TypeScript for type safety
- ✅ Input validation with Zod
- ✅ Error handling and logging
- ✅ RESTful API design
- ✅ Docker containerization
- ✅ Database migrations with Prisma
- ✅ Responsive UI with Tailwind CSS
- ✅ Unit and integration tests
- ✅ Security best practices

## 🏗️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Icons**: Lucide React
- **Testing**: Vitest, React Testing Library

### Backend
- **Runtime**: Node.js 20
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL 15
- **ORM**: Prisma
- **Validation**: Zod
- **Logging**: Winston
- **Security**: Helmet, CORS, Rate Limiting
- **Testing**: Jest, Supertest

### DevOps
- **Containerization**: Docker & Docker Compose
- **Reverse Proxy**: Nginx
- **Database**: PostgreSQL with data persistence

## 🚀 Getting Started

### Prerequisites

- **Docker** and **Docker Compose** (recommended)
- OR **Node.js** 20+ and **PostgreSQL** 15+ (for local development)

### Option 1: Docker (Recommended)

This is the fastest way to get the entire application running.

1. **Clone the repository**:
```bash
git clone <repository-url>
cd Capitec-Projects-1
```

2. **Start all services**:
```bash
docker-compose up --build
```

This command will:
- Build the frontend, backend, and database containers
- Run database migrations automatically
- Start all services

3. **Access the application**:
- **Frontend**: http://localhost
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/health

4. **Seed the database** (optional, in a new terminal):
```bash
docker-compose exec backend npx prisma db seed
```

5. **Stop the application**:
```bash
docker-compose down
```

To remove all data:
```bash
docker-compose down -v
```

### Option 2: Local Development

#### Backend Setup

1. **Navigate to backend directory**:
```bash
cd backend
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
```bash
cp .env.example .env
```

Edit `.env` with your PostgreSQL credentials:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/appointments?schema=public"
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

4. **Run database migrations**:
```bash
npm run prisma:generate
npm run prisma:migrate
```

5. **Seed the database** (optional):
```bash
npx prisma db seed
```

6. **Start the backend server**:
```bash
npm run dev
```

The backend will be available at `http://localhost:3001`.

#### Frontend Setup

1. **Navigate to frontend directory** (in a new terminal):
```bash
cd frontend
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
```bash
cp .env.example .env
```

4. **Start the development server**:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`.

## 🧪 Testing

### Backend Tests

```bash
cd backend
npm test                 # Run tests
npm run test:watch       # Run in watch mode
```

### Frontend Tests

```bash
cd frontend
npm test                 # Run tests
npm run test:ui          # Run with UI
npm run test:coverage    # Generate coverage report
```

## 📁 Project Structure

```
Capitec-Projects-1/
├── .github/
│   └── copilot-instructions.md
├── backend/
│   ├── src/
│   │   ├── __tests__/           # Test files
│   │   ├── controllers/         # Request handlers
│   │   ├── middleware/          # Express middleware
│   │   ├── routes/             # API routes
│   │   ├── schemas/            # Zod validation schemas
│   │   ├── services/           # Business logic
│   │   ├── utils/              # Utilities
│   │   └── index.ts            # Entry point
│   ├── prisma/
│   │   ├── schema.prisma       # Database schema
│   │   └── seed.ts             # Seed script
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── pages/              # Page components
│   │   ├── services/           # API services
│   │   ├── types/              # TypeScript types
│   │   ├── lib/                # Utilities
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/                 # Static assets
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   └── README.md
├── docker-compose.yml
└── README.md                   # This file
```

## 🔌 API Endpoints

### Branches
- `GET /api/branches` - Get all active branches
- `GET /api/branches/:id` - Get branch by ID

### Appointments
- `POST /api/appointments` - Create new appointment
- `GET /api/appointments` - List appointments (supports filtering)
- `GET /api/appointments/:id` - Get appointment by ID
- `PATCH /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Delete appointment
- `GET /api/appointments/available-slots` - Get available time slots

#### Query Parameters for List Appointments:
- `branchId`: Filter by branch ID
- `status`: Filter by status (PENDING, CONFIRMED, CANCELLED, COMPLETED)
- `date`: Filter by date (YYYY-MM-DD)
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)

## 🗄️ Database Schema

### Branch
- id (UUID)
- name (String)
- address (String)
- city (String)
- phoneNumber (String)
- openingTime (String, format: "HH:MM")
- closingTime (String, format: "HH:MM")
- isActive (Boolean)

### Appointment
- id (UUID)
- customerName (String)
- customerEmail (String)
- customerPhone (String)
- appointmentDate (DateTime)
- appointmentTime (String, format: "HH:MM")
- purpose (String)
- notes (String, optional)
- status (Enum: PENDING, CONFIRMED, CANCELLED, COMPLETED)
- branchId (Foreign Key)
- confirmationSent (Boolean)

## 🔒 Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing configuration
- **Rate Limiting**: API rate limiting
- **Input Validation**: Zod schema validation
- **SQL Injection Prevention**: Prisma ORM with parameterized queries
- **Error Handling**: Centralized error handling middleware

## 🌐 Environment Variables

### Backend (.env)
```env
DATABASE_URL=postgresql://user:password@host:port/database
PORT=3001
NODE_ENV=development|production
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_BASE_URL=http://localhost:3001
```

## 📝 Development Notes

### Making Changes

1. **Database Schema Changes**:
```bash
cd backend
# Edit prisma/schema.prisma
npm run prisma:migrate
```

2. **Adding New API Endpoints**:
   - Create schema in `backend/src/schemas/`
   - Implement service in `backend/src/services/`
   - Create controller in `backend/src/controllers/`
   - Add route in `backend/src/routes/`

3. **Adding New Pages**:
   - Create page component in `frontend/src/pages/`
   - Add route in `frontend/src/App.tsx`

## 🐛 Troubleshooting

### Docker Issues

**Ports already in use**:
```bash
# Stop conflicting services or change ports in docker-compose.yml
docker-compose down
```

**Database connection issues**:
```bash
# Restart database container
docker-compose restart postgres
```

### Local Development Issues

**Prisma Client not generated**:
```bash
cd backend
npm run prisma:generate
```

**Database migration issues**:
```bash
cd backend
npx prisma migrate reset  # This will reset the database
npm run prisma:migrate
```

## 📄 License

MIT

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Contact

For questions or support, please open an issue in the repository.

---

Built with ❤️ for Capitec Software Engineer Application
