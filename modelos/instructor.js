//modelo del instructor
import {DataTypes} from 'sequelize'
import sequelize from '../configuracion-basedatos/configuracion.js';



    const Instructor =sequelize.define('Instructor',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        biografia:{
            type:DataTypes.STRING,
           
        },
        fotoPerfil:{
            type:DataTypes.STRING,
            
        },
        foto:{
            type:DataTypes.STRING,
            
        },

    });

    
    



    export default Instructor;