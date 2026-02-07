
import {DataTypes} from 'sequelize'
import sequelize from '../configuracion-basedatos/configuracion.js';
import bcrypt from 'bcryptjs'




    const Usuario= sequelize.define('Usuario',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        correo:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        contrasena:{
            type:DataTypes.STRING,
            allowNull:false
        },

        

        },{ 
        
            hooks:{
                beforeSave: async(usuario)=>{
                    if(usuario.contrasena){
                        const salt=await bcrypt.genSalt(10);
                        usuario.contrasena=await bcrypt.hash(usuario.contrasena,salt);
                    }
                   
                
            },
        }
          


        //el hook para hashear la contraena antes de guardarla
         
      

});




export default Usuario;














  









    






