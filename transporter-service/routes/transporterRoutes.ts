import { Router } from 'express';
import  transporterController  from '../controllers/transporterController';

const router = Router();

// Create a Transporter
router.post("/transporters", transporterController.createTransporter);

// Get a Transporter by ID
router.get("/transporters/:id", transporterController.getTransporterById);

// Update a Transporter
router.put("/transporters/:id", transporterController.updateTransporter);

// Delete a Transporter
router.delete("/transporters/:id", transporterController.deleteTransporter);
export default router;
