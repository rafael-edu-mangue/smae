import {Sequelize} from  'sequelize'
import sequelize from './db';

//la conexion a la base de datos en post grest en render

const isProduction=process.env.NODE_ENV==="production"


const sequelize= isProduction ? new Sequelize(process.env.DATABASE_URL,{

   dialect:"postgres",
   protocol:"postgrest",
   logging:false,
   dialectOptions:{
    ssl:{
      require:true,
      rejectUnauthorized:false,
    }
   }
 
  })

  : new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host:process.env.DB_HOST,
      dialect: "postgrest",
      port:process.env.DB_PORT,

    }
  );





export default sequelize;