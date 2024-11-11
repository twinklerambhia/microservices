import { Router } from 'express';
import  orderController  from '../controllers/orderController';

const router = Router();

// Create an Order
router.post("/orders", orderController.createOrder);

// Get an Order by ID
router.get("/orders/:id", orderController.getOrderById);

// Update an Order
router.put("/orders/:id", orderController.updateOrder);

// Delete an Order
router.delete("/orders/:id", orderController.deleteOrder);

export default router;
