#!/bin/bash

echo "=================================="
echo "Appointment Booking System Setup"
echo "=================================="
echo ""

# Check if Docker is installed
if command -v docker &> /dev/null; then
    echo "✓ Docker detected"
    echo ""
    echo "Starting application with Docker..."
    echo ""
    
    docker-compose up --build
else
    echo "✗ Docker not detected"
    echo ""
    echo "Starting local development setup..."
    echo ""
    
    # Backend setup
    echo "Setting up backend..."
    cd backend
    
    if [ ! -f .env ]; then
        cp .env.example .env
        echo "✓ Created backend .env file"
    fi
    
    echo "Installing backend dependencies..."
    npm install
    
    echo "Generating Prisma client..."
    npm run prisma:generate
    
    echo "Running database migrations..."
    npm run prisma:migrate
    
    echo "Seeding database..."
    npx prisma db seed
    
    cd ..
    
    # Frontend setup
    echo ""
    echo "Setting up frontend..."
    cd frontend
    
    if [ ! -f .env ]; then
        cp .env.example .env
        echo "✓ Created frontend .env file"
    fi
    
    echo "Installing frontend dependencies..."
    npm install
    
    cd ..
    
    echo ""
    echo "=================================="
    echo "Setup Complete!"
    echo "=================================="
    echo ""
    echo "To start the application:"
    echo "1. Start PostgreSQL on localhost:5432"
    echo "2. Backend: cd backend && npm run dev"
    echo "3. Frontend: cd frontend && npm run dev"
    echo ""
    echo "Backend will run on: http://localhost:3001"
    echo "Frontend will run on: http://localhost:5173"
fi
