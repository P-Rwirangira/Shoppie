#!/bin/bash

echo "🚀 Setting up Chafetz API Integration..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_info "Node.js version: $(node --version)"
print_info "npm version: $(npm --version)"

# Install root dependencies
print_info "Installing root dependencies..."
npm install
if [ $? -eq 0 ]; then
    print_status "Root dependencies installed"
else
    print_error "Failed to install root dependencies"
    exit 1
fi

# Setup Server
print_info "Setting up server..."
cd apps/server

# Install server dependencies
npm install
if [ $? -eq 0 ]; then
    print_status "Server dependencies installed"
else
    print_error "Failed to install server dependencies"
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    cp .env.example .env
    print_warning "Created .env file from .env.example. Please update it with your configuration."
else
    print_info ".env file already exists"
fi

cd ../..

# Setup Customer App
print_info "Setting up customer app..."
cd apps/customer

# Install customer dependencies
npm install
if [ $? -eq 0 ]; then
    print_status "Customer app dependencies installed"
else
    print_error "Failed to install customer app dependencies"
    exit 1
fi

# Create .env.local file if it doesn't exist
if [ ! -f .env.local ]; then
    cp .env.local.example .env.local
    print_status "Created .env.local file for customer app"
else
    print_info ".env.local file already exists for customer app"
fi

cd ../..

# Setup Dashboard App
print_info "Setting up dashboard app..."
cd apps/dashboard

# Install dashboard dependencies
npm install
if [ $? -eq 0 ]; then
    print_status "Dashboard app dependencies installed"
else
    print_error "Failed to install dashboard app dependencies"
    exit 1
fi

# Create .env.local file if it doesn't exist
if [ ! -f .env.local ]; then
    cp .env.local.example .env.local
    print_status "Created .env.local file for dashboard app"
else
    print_info ".env.local file already exists for dashboard app"
fi

cd ../..

# Create logs directory for server
mkdir -p apps/server/logs
print_status "Created logs directory for server"

print_status "Setup completed successfully!"

echo ""
print_info "Next steps:"
echo "1. Update apps/server/.env with your MongoDB URI and other configuration"
echo "2. Start MongoDB service"
echo "3. Run 'npm run dev' to start all applications"
echo ""
print_info "Available commands:"
echo "• npm run dev - Start all applications"
echo "• npm run dev:server - Start only the server"
echo "• npm run dev:customer - Start only the customer app"
echo "• npm run dev:dashboard - Start only the dashboard app"
echo ""
print_info "API will be available at: http://localhost:5000/api"
print_info "Customer app will be available at: http://localhost:3000"
print_info "Dashboard app will be available at: http://localhost:3001"
echo ""
print_warning "Don't forget to check the API_INTEGRATION_GUIDE.md for detailed setup instructions!"