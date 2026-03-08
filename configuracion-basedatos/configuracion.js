import {Sequelize} from  'sequelize'
import dotenv from 'dotenv'


//variables env del entorno
dotenv.config();

//la conexion a la base de datos en post grest en render



//saber si estamos en produccion
const isProduction=process.env.NODE_ENV==="production"

//debug profesional
console.log('ENV:',{
  NODE_ENV: process.env.NODE_ENV,
   DATABASE_URL:
   process.env.DATABASE_URL? "ok": "no definida",
  DB_NAME:process.env.DB_NAME,
  DB_USER:process.env.DB_USER,
  DB_HOST:process.env.DB_HOST,
  DB_PORT:process.env.DB_PORT,




});

//crea la conexion con render
const sequelize= isProduction ? new Sequelize(process.env.DATABASE_URL,{
                                           //aqui lee laurl de render

   dialect:"postgres",
   protocol:"postgrest",
   logging: false,
   dialectOptions:{
    ssl:{
      require:true,
      rejectUnauthorized:false,
    }
   }
 
  })

   : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host:process.env.DB_HOST,
      dialect: "postgres",
      port:process.env.DB_PORT,

    }
  );





export default sequelize;