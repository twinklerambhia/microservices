import { Request, Response } from "express";
import Transporter from "../models/transporter";

// Create a Transporter
const createTransporter = async (req: Request, res: Response): Promise<void> => {
    try {
      const { transporterName, transporterType, contactPerson, phoneNumber } = req.body;
      const newTransporter = await Transporter.create({ transporterName, transporterType, contactPerson,phoneNumber });
      res.status(201).json(newTransporter);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  };

const getTransporterById= async( req:Request, res:Response): Promise<void>=>{
    try{
        const transportedId= req.params.id;
        const transporter= await Transporter.findByPk(transportedId);
        if(!transporter){
            res.status(404).json({message:'transporter not found'});
            return;
        }
        res.status(200).json(transporter);
    }catch(error){
        res.status(500).json({message:'internal server error', error});
    }
};
// Update a Transporter
const updateTransporter = async (req: Request, res: Response): Promise<void> => {
    try {
      const transporterId = req.params.id;
      const { transporterName, transportType, phoneNumber } = req.body;
      const transporter = await Transporter.findByPk(transporterId);
      if (!transporter) {
        res.status(404).json({ message: "Transporter not found" });
        return;
      }
      transporter.transporterName = transporterName || transporter.transporterName;
      transporter.transportType = transportType || transporter.transportType;
      transporter.phoneNumber = phoneNumber || transporter.phoneNumber;
      await transporter.save();
      res.status(200).json(transporter);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  };
// Delete a Transporter
const deleteTransporter = async (req: Request, res: Response): Promise<void> => {
    try {
      const transporterId = req.params.id;
      const transporter = await Transporter.findByPk(transporterId);
      if (!transporter) {
        res.status(404).json({ message: "Transporter not found" });
        return;
      }
      await transporter.destroy();
      res.status(200).json({ message: "Transporter deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  };
  
  export default { createTransporter, getTransporterById, updateTransporter, deleteTransporter };
