import React,{Fragment, useState} from 'react';

const NuevosProyectos = () => {

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
       </Fragment>
     );
}
 
export default NuevosProyectos;