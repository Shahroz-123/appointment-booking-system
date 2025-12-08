# Quick Start Script for Windows PowerShell

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Appointment Booking System Setup" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if Docker is installed
$dockerInstalled = Get-Command docker -ErrorAction SilentlyContinue
if ($dockerInstalled) {
    Write-Host "✓ Docker detected" -ForegroundColor Green
    Write-Host ""
    Write-Host "Starting application with Docker..." -ForegroundColor Yellow
    Write-Host ""
    
    docker-compose up --build
} else {
    Write-Host "✗ Docker not detected" -ForegroundColor Red
    Write-Host ""
    Write-Host "Starting local development setup..." -ForegroundColor Yellow
    Write-Host ""
    
    # Backend setup
    Write-Host "Setting up backend..." -ForegroundColor Cyan
    Set-Location backend
    
    if (!(Test-Path ".env")) {
        Copy-Item .env.example .env
        Write-Host "✓ Created backend .env file" -ForegroundColor Green
    }
    
    Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
    npm install
    
    Write-Host "Generating Prisma client..." -ForegroundColor Yellow
    npm run prisma:generate
    
    Write-Host "Running database migrations..." -ForegroundColor Yellow
    npm run prisma:migrate
    
    Write-Host "Seeding database..." -ForegroundColor Yellow
    npx prisma db seed
    
    Set-Location ..
    
    # Frontend setup
    Write-Host ""
    Write-Host "Setting up frontend..." -ForegroundColor Cyan
    Set-Location frontend
    
    if (!(Test-Path ".env")) {
        Copy-Item .env.example .env
        Write-Host "✓ Created frontend .env file" -ForegroundColor Green
    }
    
    Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
    npm install
    
    Set-Location ..
    
    Write-Host ""
    Write-Host "==================================" -ForegroundColor Cyan
    Write-Host "Setup Complete!" -ForegroundColor Green
    Write-Host "==================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "To start the application:" -ForegroundColor Yellow
    Write-Host "1. Start PostgreSQL on localhost:5432" -ForegroundColor White
    Write-Host "2. Backend: cd backend && npm run dev" -ForegroundColor White
    Write-Host "3. Frontend: cd frontend && npm run dev" -ForegroundColor White
    Write-Host ""
    Write-Host "Backend will run on: http://localhost:3001" -ForegroundColor Cyan
    Write-Host "Frontend will run on: http://localhost:5173" -ForegroundColor Cyan
}
