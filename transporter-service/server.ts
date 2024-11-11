import express from 'express';
import transporterRoutes from './routes/transporterRoutes';
import sequelize from './config/sequelize'; // Import sequelize instance

const app = express();
const port = 4000;

app.use(express.json());
app.use('/api', transporterRoutes); // Register routes

sequelize.sync().then(() => {
  console.log('Transporter Service: Database connected and synced!');
  app.listen(port, () => {
    console.log(`Transporter Service listening at http://localhost:${port}`);
  });
});
