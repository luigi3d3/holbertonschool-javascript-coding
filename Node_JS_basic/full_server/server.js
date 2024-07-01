import express from 'express';

import routes from './routes';


const app = express();
const PORT = process.env.PORT || 1245;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to handle database file path
app.use((req, res, next) => {
  req.databaseFile = process.argv[2]; // Get database file path from command line args
  next();
});

// Routes
app.use('/', routes);

// Error handling for undefined routes
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

export default app;
