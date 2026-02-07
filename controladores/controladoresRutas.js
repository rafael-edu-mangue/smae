import express from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import curso from '../modelos/curso.js'
import usuario from '../modelos/usuario.js'
//registrar usuario
import registro from '../modelos/usuario.js'
//iniciar sesioncon usuario
import inicio from '../modelos/usuario.js'
import losDetalles from  '../modelos/detallesCurso.js'
import Detalles from  '../modelos/detallesCurso.js'
import modulos from  '../modelos/modulosCurso.js'
import inscribirse from '../modelos/inscripcion.js'
import Inscripcion from '../modelos/inscripcion.js'
import Curso from "../modelos/curso.js";
import { where } from "sequelize";
import modulosCurso from "../modelos/modulosCurso.js";

const router=express.Router()





        //funcion que crea un curso nuevo

        export const crearCurso=async(req,res)=>{
            try{

                const creados=await curso.create(req.body,{
                    include:[
                        
                        {
                            model:Detalles,
                            as:'detalles',
                        },
                       
                        {
                            model:modulosCurso,
                            as:'modulos'
                        }
                        
                    ]
                    
                });
                res.json(creados);
                
            }catch(error){
                console.error('error al crear curso',error);
               
            }

        }

          //funcion que cuenta todos los cursos y los muestra

          export const contarCursos=async(req,res)=>{
            try{
                //contar cursos
                const total=await curso.count();
                //optene todos lo s cursos
                const cursos=await curso.findAll({
                    include:[{
                        model:losDetalles,
                        as:'detalles'
                    }]
                }
                    
                );
                res.json({cantidad:total, cursos:cursos});
                res.status(201).json();
            }catch(error){
                console.error('error al contar curso',error);
              
               
            }
        
        }

          //funcion que filtra los usuarios del curso

          export const buscarUsuario=async(req,res)=>{
            try{
                const {cursoId}=req.params;
                const usuarios=await usuario.findAll({where:{cursoId}})
                //optene todos lo s cursos
                const cursos=await curso.findAll();
                res.json(usuarios);
                res.status(201).json();
            }catch(error){
                console.error('error al obtener a los usuarios',error);
              
               
            }
        
        }
    //funcion que registra nuevo usuario

    export const registroUsuario=async(req,res)=>{
        try{
            const nuevoUsuario=await registro.create(req.body);
            res.json({nuevoUsuario});
            res.status(201).json(nuevoUsuario);
        }catch(error){
            console.error('error al crear curso',error);
           
        }

    }


       //funcion de inicio de sesion del usuario

       export const inicioSesion=async(req,res)=>{
          const{correo,contrasena}=req.body
        try{
           
            //verificamos si el usuario existe en la base de datos
            const Usuario=await inicio.findOne({where:{correo}})
            if(!Usuario){
                return res.status(404).json({message:'credenciales invalidas'})
                
            }
            
            //comparrar lacontasena del usuario
            const esValido =await bcrypt.compare(contrasena,Usuario.contrasena);
            if(!esValido){
                return res.status(401).json({message:'cresenciales invalidas'})

            } 
           
          
            //generamos el token con jwt

            const token=jwt.sign({id:Usuario.id, correo:Usuario.correo, nombre:Usuario.nombre},process.env.JWT_SECRET);
            console.log('token:',token)
            
          
            res.json({message:'inicio de sesion exitoso',
           usuario:{
                id:Usuario.id,
                nombre:Usuario.nombre,
                correo:Usuario.correo
            },
            token,
            
        });
            
        
        }catch( error ){
            console.error('error al iniciar sesion:', error)
            
        }

    }

     //funcion que cuenta todos los usuarios

     export const contarUsuarios=async(req,res)=>{
        try{
            //contar cursos
            const total=await usuario.count();
            //optene todos lo s cursos
            const todosLosUsuarios=await usuario.findAll();
            res.json({cantidad:total, usuarios:todosLosUsuarios});
            res.status(201).json();
        }catch(error){
            console.error('error al contar usuarios',error);
          
           
        }
    
    }


     //funcion que MUESTRA LOS CURSOS EXISTENTES PUBLICADOS
     

     export const mostrarCursos=async(req,res)=>{
        try{
           
            const cursos=await curso.findAll({
                include:[{
                    model:losDetalles,
                    as:'detalles'
                }]
            });
            if(!curso)return res.status(404).json('curso no encontrado');
            res.json(cursos);
        }catch(error){
            console.error('error al optener el curso',error);
          
           
        }
    
    }

    
        

        
  
  

          //funcio de inscripcion al cursoooooooooooooooo 

          


          export const laInscripcion=async(req,res)=>{
           
            
            try{

                const{nombre,telefono, usuarioId, cursoId}=req.body;
             
                const  inscripcion=await Inscripcion.create({nombre,telefono,cursoId,usuarioId});
                res.status(201).json(Inscripcion)
            }catch(error){
                res.status(500).json({error:'error de inscripcion del curso'})
                
            }
           
        
        };

        export const checkRegistro=async(req,res)=>{
            const{usuarioId, cursoId}=req.query;
            try{
               
                const encontrado=await inscribirse.findOne({where:{usuarioId,cursoId}});
                res.json({inscrito:!!found});

            }catch(error){
                res.status(500).json({error: 'server error'});

            }
           
        };
    
          


        
          //funcion que muestra la cantidad de cursos





          export function prueba(req,res){
            console.log(req.body ,"datos recibidos");
            res.json({mensaje:'datos recibidos correctamente',datos:req.body});
            };
        
        
    



//funcion para mostrar los detalles del curso
export const detallesCurso=async(req,res)=>{
    try{
       
        const cursos=await curso.findByPk( req.params.id,
            {
                include:[{
                    model:losDetalles,
                    as:'detalles'
                }]
            }
        );
        res.json(cursos);

    }catch(error){
        res.status(500).json({error: 'server error, error del servidor al mostrar los detalles del curso'});

    }
   
};
//funcion para eliminar los cursoa

export const eliminarCurso=async(req,res)=>{
    try{
       
        const {id}=req.params;
        const Curso= await curso.findByPk(id);
        if(!curso){
            return res.status(404).json({message:'el curso no existe'})

        }
              
        await Curso.destroy()
        res.status(201).json({message:'curso eliminado corrrectamente'})
    }catch(error){console.error('error al eliminar el curso', error)
        res.status(500).json({error:'server error'})
    }

   
};
export function detalles (req,res){

    res.send('este proyecto me esta volando la cabeza jolin ya me he comido unos 3000 errores!!!!!');

}

//funcion para buscar cursos por nombre


export const buscarCurso=async(req,res)=>{
   
        try{
           
            const cursos=await Curso.findOne({where:{tituloCurso:req.params.tituloCurso}})
            res.json(cursos);
        }catch(error){
            res.status(500).json({error:'error al obtener cursos'}) 
        }
        
      

}


///////////////////////////////////////////////////////////////////////
export function obtenerDatos(req,res){

    res.send('este proyecto me esta volando la cabeza jolin ya me he comido unos 3000 errores!!!!!');

}


//funcion que elimina los datos


export function eliminarDatos(req,res){

    res.send('este proyecto me esta volando la cabeza jolin ya me he comido unos 3000 errores!!!!!');

}

//funcion que actualiza  los datos


export function actualizarDatos(req,res){

    res.send('este proyecto me esta volando la cabeza jolin ya me he comido unos 3000 errores!!!!!');

}


export default {crearCurso, contarCursos,contarUsuarios,buscarUsuario,
    registroUsuario,inicioSesion, mostrarCursos , detallesCurso,eliminarCurso,laInscripcion, checkRegistro,buscarCurso};
