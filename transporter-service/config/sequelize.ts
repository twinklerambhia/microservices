import {Sequelize} from 'sequelize';
import {database, username, password} from '../config/config';

const sequelize = new Sequelize(database,username,password,{
    host:'localhost',
    dialect:'mysql'
});
sequelize.authenticate()
.then(()=>{
    console.log('connection established successfully');
})
.catch((err:Error)=>{
    console.log('unable to connect to database', err);
});

sequelize.sync({force:false})
.then(()=>{
    console.log('database and tables created');
})
.catch((err:Error)=>{
    console.log('error creating database tables')
});
 export default sequelize;