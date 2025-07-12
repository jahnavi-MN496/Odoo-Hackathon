# Odoo Hackathon Backend

A Node.js Express backend API for the Odoo Hackathon project.

## Features

- Express.js server with ES6 modules
- CORS enabled for frontend communication
- Security middleware (Helmet)
- Rate limiting
- Request logging
- RESTful API endpoints

## Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Create environment file:**
   Create a `.env` file in the backend directory:
   ```
   PORT=5000
   FRONTEND_URL=http://localhost:5173
   NODE_ENV=development
   ```

3. **Start the server:**
   ```bash
   # Development mode (with auto-restart)
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Base URL: `http://localhost:5000`

- `GET /` - API info
- `GET /health` - Health check
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `GET /api/skills` - Get all skills
- `GET /api/projects` - Get all projects
- `GET /api/requests` - Get all requests

## Development

The server runs on port 5000 by default. Make sure your frontend is configured to make API calls to `http://localhost:5000`.

## Project Structure

```
backend/
├── server.js          # Main server file
├── config.js          # Configuration
├── routes/
│   └── api.js         # API routes
├── package.json       # Dependencies
└── README.md          # This file
``` 