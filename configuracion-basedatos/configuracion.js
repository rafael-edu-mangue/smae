import {Sequelize} from  'sequelize'

//conexion a postgrestim


const sequelize=new Sequelize('smae','postgres','1234',{
   host:'localhost',
   dialect:'postgres',
   port:5432,
   logging:console.log,
 
  });




export default sequelize;