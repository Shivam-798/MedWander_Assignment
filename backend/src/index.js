// server/index.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import formRoutes from './routes/formRoutes.js';
import { sequelize } from './models/FormData.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', formRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
