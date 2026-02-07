//lo detalles del curso 

import {DataTypes} from 'sequelize'
import sequelize from '../configuracion-basedatos/configuracion.js';



const detallesCurso=sequelize.define(' detallesCurso',{

   

  
    correoCentro:{
        type:DataTypes.STRING,
       
    },
    whatsapCentro:{
        type:DataTypes.STRING,
       
    },
    categoriaCurso:{
        type:DataTypes.STRING,
       
    },
    objetivosDeAprendisaje:{
        type:DataTypes.STRING,
       
    },

    aquienVaDirigido:{
        type:DataTypes.STRING,
       
    },
    nivel:{
        type:DataTypes.STRING,
       
    },
    idioma:{
        type:DataTypes.STRING,
        
    },
  

    enlaceVideo:{
        type:DataTypes.STRING,
        
    },

    enlacePdf:{
        type:DataTypes.STRING,
       
    },
    nombreInstructor:{
        type:DataTypes.STRING,
       
    },
  
    biografiaInstructor:{
        type:DataTypes.STRING,
        
    },
    correoInstructor:{
        type:DataTypes.STRING,
        
    },
    whatsapInstructor:{
        type:DataTypes.STRING,
       
    },
  
    visiblidadCurso:{
        type:DataTypes.STRING,
      
    },
    fecha:{
        type:DataTypes.DATE,
       
    },

  
  
    fechaInicio:{
        type:DataTypes.DATE,
       
    },
    fechaFinalizacion:{
        type:DataTypes.DATE,
      
    },
    categoria:{
        type:DataTypes.STRING,
        
    },

    certificadoDisponiblecd:{
        type:DataTypes.STRING,
        
    },
    
    nivel:{
        type:DataTypes.STRING,
        
    },

    imagen:{
        type:DataTypes.STRING,
       
    },

         
    cursoId:{
        type:DataTypes.INTEGER,
        
      
        
    },

} );

export default detallesCurso;