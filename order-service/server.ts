import express from 'express';
import orderRoutes from './routes/orderRoutes';
import sequelize from './config/sequelize'; // Import sequelize instance

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', orderRoutes); // Register routes

sequelize.sync().then(() => {
  console.log('Order Service: Database connected and synced!');
  app.listen(port, () => {
    console.log(`Order Service listening at http://localhost:${port}`);
  });
});
