import {Sequelize,DataTypes} from 'sequelize';
import sequelize from '../configuracion-basedatos/configuracion.js';

        
            const inscripcion=sequelize.define('inscripcion',{
                id:{
                    type:DataTypes.INTEGER,
                    primaryKey:true,
                    autoIncrement:true,
                },
                usuarioId:{
                    type:DataTypes.INTEGER,
                   
                  
                  
            
                },
                nombre:{
                    type:DataTypes.STRING,
                   
                },

                telefono:{
                    type:DataTypes.STRING,
                   
                },
                cursoId:{
                    type:DataTypes.INTEGER,
                   
                  
                 
                },
                fechaInscripcion:{
                    type:DataTypes.DATE,
                    defaultValue:DataTypes.NOW,
                },

                estado:{
                    type:DataTypes.ENUM('pendiente','aceptado','rechazado'),
                    defaultValue: 'pendiente',
                    allowNull:false,
                    

                   
                },
               




            });

    export default inscripcion;