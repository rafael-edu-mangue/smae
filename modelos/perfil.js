//EL PERFIL
import {DataTypes} from 'sequelize'
import sequelize from '../configuracion-basedatos/configuracion.js';


//definir modelo de usuario


    const Perfil=sequelize.define('Perfil',{

        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        apellidos:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        fechaNacimiento:{
            type:DataTypes.DATE,
            
        },
        telefono:{
            type:DataTypes.STRING,
            
        },
        fotoPerfil:{
            type:DataTypes.STRING,
            allowNull:false,

      },
     

    
       

    });

   
   
    
export default Perfil;


