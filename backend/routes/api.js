import express from 'express';

const router = express.Router();

// Users routes
router.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe', email: 'john@example.com', skills: ['React', 'Node.js'] },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', skills: ['TypeScript', 'Python'] },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', skills: ['Vue.js', 'Java'] }
  ]);
});

router.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', skills: ['React', 'Node.js'] },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', skills: ['TypeScript', 'Python'] },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', skills: ['Vue.js', 'Java'] }
  ];
  
  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// Skills routes
router.get('/skills', (req, res) => {
  res.json([
    { id: 1, name: 'React', category: 'Frontend', users: 15 },
    { id: 2, name: 'Node.js', category: 'Backend', users: 12 },
    { id: 3, name: 'TypeScript', category: 'Language', users: 18 },
    { id: 4, name: 'Python', category: 'Language', users: 10 },
    { id: 5, name: 'Vue.js', category: 'Frontend', users: 8 },
    { id: 6, name: 'Java', category: 'Language', users: 6 }
  ]);
});

// Projects routes
router.get('/projects', (req, res) => {
  res.json([
    { 
      id: 1, 
      title: 'E-commerce Platform', 
      description: 'A full-stack e-commerce solution',
      skills: ['React', 'Node.js', 'MongoDB'],
      status: 'active'
    },
    { 
      id: 2, 
      title: 'Task Management App', 
      description: 'Collaborative task management tool',
      skills: ['Vue.js', 'Python', 'PostgreSQL'],
      status: 'completed'
    }
  ]);
});

// Requests routes
router.get('/requests', (req, res) => {
  res.json([
    { 
      id: 1, 
      title: 'Need React Developer', 
      description: 'Looking for a React developer for a 3-month project',
      skills: ['React', 'TypeScript'],
      status: 'open',
      budget: '$5000'
    },
    { 
      id: 2, 
      title: 'Backend API Development', 
      description: 'Need help building REST API with Node.js',
      skills: ['Node.js', 'Express', 'MongoDB'],
      status: 'in-progress',
      budget: '$3000'
    }
  ]);
});

export default router; 