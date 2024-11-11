import { Sequelize } from "sequelize";
import { database,username,password } from "./config";

const sequelize =new Sequelize(database,username,password,{
    host: 'localhost',
    dialect:'mysql'
});
sequelize.authenticate()
    .then(()=> {
        console.log('connection has been established successfully');
    })
    .catch((err:Error)=>{
        console.log('unable to connect to the database', err);
    });

sequelize.sync({force:false})
    .then(()=>{
        console.log('database and tables created');
    })
    .catch((err:Error)=>{
        console.log('error creating datbase tables', err);
    });
export default sequelize;