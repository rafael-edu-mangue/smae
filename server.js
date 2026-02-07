// este archivo conecta todo y con
import {Sequelize} from 'sequelize';

import express, { Router } from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './configuracion-basedatos/configuracion.js';
import usuario from './modelos/usuario.js'
import curso from './modelos/curso.js';
import perfil from './modelos/perfil.js';
import instructor from './modelos/instructor.js';
import detallesCurso from './modelos/detallesCurso.js';
import inscripcion from './modelos/inscripcion.js'
//import rutasSmae from './rutas/rutasSmae.js'
import router from './rutas/rutasSmae.js';
import dotenv from 'dotenv'
import Usuario from './modelos/usuario.js';
import modulosCurso from './modelos/modulosCurso.js';

//variables env
dotenv.config();


//LAS RELACIONES QUE HAY ENTRE LOS MODELOS
curso.hasMany(inscripcion,{ 
  foreignKey:'cursoId',
  as:'inscripciones'
 

});

inscripcion.belongsTo(curso,{ 
  foreignKey:'cursoId',
  as:'curso'
  

});



//relaciones  entre elcurso y sus detalles



  curso.hasOne(detallesCurso,{ 
    foreignKey:'cursoId',
    as:'detalles'
 
 });

 detallesCurso.belongsTo(curso,{
  foreignKey: 'cursoId',
  as:'curso'
  });
 // 

 curso.hasMany(modulosCurso,{ 
  foreignKey:'cursoId',
  as:'modulos'

});

modulosCurso.belongsTo(curso,{ 
  foreignKey:'cursoId',
  as:'curso'

});




//

sequelize.sync()
.then(()=>{
  console.log('modelos sincronizados');
})
.catch(err=>{
  console.error('error al sincronizar modelos',err);
})
    







   

//funcion para sincronizar la base de datos


 async function sincronizarBd(){
  try{

    //sincroniza la base de datos
    await sequelize.sync({alter:true});
    console.log('tablas sincronizadas EN LA BASE DE DATOS' )

    console.log(usuario===sequelize.models.Usuario);
    console.log(curso===sequelize.models.Curso);
    console.log(perfil===sequelize.models.Perfil);
    console.log(instructor===sequelize.models.instructor);
   
    console.log(router)
  
  }catch(error){
    console.error('error al sincronizar las tablas',error);

  }
 }
sincronizarBd()

 //autenticacion de sequelize para compobra la base de datos

 sequelize.authenticate()
 .then(()=>{
  console.log('conexion establecida');
 })
 .catch(error=>{
  console.error('error de conexion',error)
 });

 

 

//variables de entorno
const PORT =process.env|| 4001

 const app= express();
 const puerto='4001';

 


 //middleware para analizar el json

 app.use(express.json());
 app.use(cors());  

 //rutas
 
  app.use(router);
  app.use('/api/curso',router);
  app.use('/api/total',router);
  app.use('/api/usuarios',router);
  app.use('/api/losUsuarios',router);
  app.use('api/todosCursos',router);
  app.use('api/cursos',router);
  app.use('api/buscar',router);
  app.use('api/inicio',router);
  app.use('api/buscar',router);
 
  
  
 
 
  
 

 

  

//iniciar elservidor
app.listen(puerto,()=>{
console.log('servidor corriendo en http://localHost:{puerto}',puerto);


});