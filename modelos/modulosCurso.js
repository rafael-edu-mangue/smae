//lo detalles del curso 

import {DataTypes} from 'sequelize'
import sequelize from '../configuracion-basedatos/configuracion.js';



const modulosCurso=sequelize.define(' modulosCurso',{

   

  
 
  

    tituloModulo:{
        type:DataTypes.STRING,
        
    },

    descripcionModulo:{
        type:DataTypes.STRING,
      
    },
    semana:{
        type:DataTypes.DATE,
       
    },
  
    leccionesModulo:{
        type:DataTypes.STRING,
      
    },
    tituloLeccion:{
        type:DataTypes.STRING,
       
    },
    videoModulo:{
        type:DataTypes.STRING,
       
    },
    videoModulo:{
        type:DataTypes.STRING,
       
    },
    recursosModulo:{
        type:DataTypes.STRING,
       
    },
   
    

         
    cursoId:{
        type:DataTypes.INTEGER,
        
      
        
    },

} );

export default modulosCurso;