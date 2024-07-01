import express from 'express';
import dotenv from 'dotenv'; 
import path from 'path';
import { readDatabase } from './utils';
import routes from './routes';

dotenv.config(); 
const app = express();
const PORT = process.env.PORT || 1245; 


app.use(express.json());


app.use((req, res, next) => {
  req.databaseFile = process.argv[2]; 
  next();
});


app.use('/', routes);


app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

export default app;
