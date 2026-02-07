
//estas rutas son para que los usuarios se autentiquen y se registren
const router=express.Router(); 
import express from 'express';
const app=express();
import { crearCurso,  contarCursos, contarUsuarios, buscarUsuario,registroUsuario, inicioSesion,
    mostrarCursos,detallesCurso,eliminarCurso, laInscripcion,checkRegistro,buscarCurso} from '../controladores/controladoresRutas.js';







//ruta de guardar elcurso
router.post('/api/curso',crearCurso)


//optener total cursos
router.get('/api/total',contarCursos)



//optener filtrar usuarios 
router.get('/api/curso/:cursoId',buscarUsuario)

 //registrar nuevo usuario 
router.post('/api/registro',registroUsuario)

 //registrar inicio de sesion
 router.post('/api/inicio',inicioSesion)

 //contar usuarios  registrados
 router.get('/api/losUsuarios',contarUsuarios)



//optener y mostrr los cursos
router.get('/api/todosCursos',mostrarCursos)


//ruta alos detalles del curso al curso
router.get('/api/cursos/:id',detallesCurso)




//eliminar el curso
router.delete('/api/eliminar/:id',eliminarCurso)


//inscribirse al curso
router.post('/api/inscripcion',laInscripcion)


//RUTA PARA EL BUSCADOR DE CURSOS
router.get('/api/buscar',buscarCurso)


//comprobar si existe el usuario
router.get('/api/inscripciones',checkRegistro)


//inscribirse a un
router.get('/',)



//eliminar en la base de datos

router.delete('/',)


//actualizar la base de datos
router.put('/',)


export default router;