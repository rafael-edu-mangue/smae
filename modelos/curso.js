//el modelo  del curso

import {DataTypes} from 'sequelize'
import sequelize from '../configuracion-basedatos/configuracion.js';






        const Curso=sequelize.define(' Curso',{

            
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        tituloCurso:{
            type:DataTypes.STRING,
            
        },
        descripcionCurso:{
            type:DataTypes.STRING,
            
        },

        descripcionBreve:{
            type:DataTypes.STRING,
            
        },

        centro:{
            type:DataTypes.STRING,
           
        },

        precio:{
            type:DataTypes.DECIMAL,
            
        },

        imagenPortada:{
            type:DataTypes.STRING,
           
        },

        cursoGratisOpago:{
            type:DataTypes.STRING,
           
        },

        requisitosParaAprobar:{
            type:DataTypes.STRING,
           
        },
          
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

        

      
        
            
        });

      
      


     export default Curso;

           




      



