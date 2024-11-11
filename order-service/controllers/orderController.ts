import { Request, Response } from "express";
import axios from 'axios';
import Order from "../models/order";

// Create an Order
const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
      const { orderNumber, customerName, orderDate } = req.body;
      const newOrder = await Order.create({ orderNumber, customerName, orderDate });
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  };

  

const getOrderById= async(req:Request,res:Response):Promise<void>=>{
    try{
        const orderId= req.params.id;
        console.log("orderId",orderId)
        const order= await Order.findByPk(orderId);
        console.log("order")
        if(!order){
            res.status(404).json({message:"order not found"});
            return;
        }

        const transporterResponse= await axios.get(`http://localhost:4000/api/transporters/${orderId}`);
        const transporterData= transporterResponse.data;

        res.status(200).json({
            order:order,
            transporter:transporterData
        });
    }catch(error){
        res.status(500).json({message:'internal server error',error});
    }
};
// Update an Order
const updateOrder = async (req: Request, res: Response): Promise<void> => {
    try {
      const orderId = req.params.id;
      const { orderNumber, customerName, orderDate } = req.body;
      const order = await Order.findByPk(orderId);
      if (!order) {
        res.status(404).json({ message: "Order not found" });
        return;
      }
      order.orderNumber = orderNumber || order.orderNumber;
      order.customerName = customerName || order.customerName;
      order.orderDate = orderDate || order.orderDate;
      await order.save();
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  };
  
  // Delete an Order
  const deleteOrder = async (req: Request, res: Response): Promise<void> => {
    try {
      const orderId = req.params.id;
      const order = await Order.findByPk(orderId);
      if (!order) {
        res.status(404).json({ message: "Order not found" });
        return;
      }
      await order.destroy();
      res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  };
  
  export default { createOrder, getOrderById, updateOrder, deleteOrder };
