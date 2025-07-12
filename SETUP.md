# Odoo Hackathon - Full Stack Setup Guide

This guide will help you set up both the frontend and backend for your Odoo Hackathon project.

## 🚀 Quick Start

### Option 1: Using the batch script (Windows)
1. Double-click `start-backend.bat` to install dependencies and start the backend
2. In another terminal, navigate to `Odoo-Hackathon` and run:
   ```bash
   npm run dev
   ```

### Option 2: Manual setup

## Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   Create a `.env` file in the `backend` directory with:
   ```
   PORT=5000
   FRONTEND_URL=http://localhost:8080
   NODE_ENV=development
   ```

4. **Start the backend server:**
   ```bash
   npm run dev
   ```

   The backend will be available at: `http://localhost:5000`

## Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd Odoo-Hackathon
   ```

2. **Install dependencies (if not already done):**
   ```bash
   npm install
   ```

3. **Start the frontend development server:**
   ```bash
   npm run dev
   ```

   The frontend will be available at: `http://localhost:8080`

## 🧪 Testing the API

Once both servers are running, you can test the API endpoints:

- **API Info:** http://localhost:5000/
- **Health Check:** http://localhost:5000/health
- **Users:** http://localhost:5000/api/users
- **Skills:** http://localhost:5000/api/skills
- **Projects:** http://localhost:5000/api/projects
- **Requests:** http://localhost:5000/api/requests

## 🔗 Frontend-Backend Integration

The frontend is already configured to connect to the backend:

- **API Service:** `src/services/api.js` - Handles all API calls
- **Custom Hooks:** `src/hooks/useApi.js` - React Query hooks for data fetching
- **Example Component:** `src/components/ApiExample.tsx` - Shows how to use the API

## 📁 Project Structure

```
odoo/
├── backend/                 # Node.js Express backend
│   ├── server.js           # Main server file
│   ├── config.js           # Configuration
│   ├── routes/
│   │   └── api.js          # API routes
│   ├── package.json        # Backend dependencies
│   └── README.md           # Backend documentation
├── Odoo-Hackathon/         # React frontend
│   ├── src/
│   │   ├── services/
│   │   │   └── api.js      # API service
│   │   ├── hooks/
│   │   │   └── useApi.js   # Custom API hooks
│   │   └── components/
│   │       └── ApiExample.tsx # Example API usage
│   └── package.json        # Frontend dependencies
└── start-backend.bat       # Quick start script
```

## 🛠️ Development Workflow

1. **Start both servers** (backend on port 5000, frontend on port 8080)
2. **Make API changes** in `backend/routes/api.js`
3. **Use the API** in your React components using the provided hooks
4. **Test endpoints** using the URLs above or tools like Postman

## 🔧 Adding New API Endpoints

1. **Add route in `backend/routes/api.js`:**
   ```javascript
   router.post('/users', (req, res) => {
     // Handle creating new user
     res.json({ message: 'User created' });
   });
   ```

2. **Add method in `src/services/api.js`:**
   ```javascript
   async createUser(userData) {
     return this.request('/users', {
       method: 'POST',
       body: JSON.stringify(userData)
     });
   }
   ```

3. **Add hook in `src/hooks/useApi.js`:**
   ```javascript
   export const useCreateUser = () => {
     const queryClient = useQueryClient();
     return useMutation({
       mutationFn: (userData) => apiService.createUser(userData),
       onSuccess: () => {
         queryClient.invalidateQueries(['users']);
       }
     });
   };
   ```

## 🚨 Troubleshooting

- **Backend not starting:** Check if port 5000 is available
- **CORS errors:** Make sure the frontend URL in backend config matches your frontend
- **API calls failing:** Verify both servers are running and check browser console for errors

## 📚 Next Steps

1. **Add a database** (MongoDB, PostgreSQL, etc.)
2. **Implement authentication** (JWT, sessions)
3. **Add more API endpoints** for your specific features
4. **Implement real-time features** (WebSockets)
5. **Add file upload** functionality
6. **Implement search and filtering**

Happy coding! 🎉 