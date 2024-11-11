import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize'; // Import the sequelize instance

class Order extends Model {
  public orderId!: number;
  public transporterId!: number;
  public orderNumber!: string;
  public customerName!: string;
  public orderDate!: Date;

}

Order.init({ 
    orderId:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    transporterId:{
        type:DataTypes.INTEGER
    },
    orderNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
  }
);

export default Order; 
