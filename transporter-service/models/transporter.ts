import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";

class Transporter extends Model{
    public transporterId!: number;
    public transporterName!:string;
    public transportType!:string;
    public contactPerson!:string;
    public phoneNumber!: string;
}

Transporter.init({
    transporterId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    transporterName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    transporterType:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contactPerson:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{sequelize,
    modelName:'Transporter',
    tableName:'transporters'
});
export default Transporter;