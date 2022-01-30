import React,{Fragment, useState, useContext} from 'react';
import proyectoContext from '../../Context/Proyectos/proyectoContext';

const NuevosProyectos = () => {

    //Obtner le state de formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario} = proyectoContext;

    // state para proyectos
    const [proyecto, SetProyecto] = useState({
        nombre : ''
    });
    // state para proyectos

    //Extraer nombre de proyecto
    const {nombre} = proyecto
    //Extraer nombre de proyecto

   //Leer los contenido de input
    const onChangeProyecto = e => {
        SetProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }
    //Leer los contenido de input

    //Cuando el usuario envia un proyecto

    const onSubmitProyecto = e => {
        e.preventDefault();

        //Validar el proyecto

        //agregr el proyecto

        //Reeiniciar el form
    }









    return ( 
       <Fragment>
            <button
          type='button'
          className='btn btn-block btn-primario'
        >
            Nuevo Proyectos
        </button>

      { formulario ?
             (
                <form
                className='formulario-nuevo-proyecto'
                onSubmit={onSubmitProyecto}
            >
                <input
                    type="text"
                    className='input-text'
                    placeholder='Nombre Proyecto'
                    name='nombre'
                    value={nombre}
                    onChange={onChangeProyecto}
                />
                <input
                    type="submit"
                    className='btn btn-primario btn-block'
                    value="agregar Proyecto"
                />

            </form>

            ) : null
          
      }
       </Fragment>
     );
}
 
export default NuevosProyectos;