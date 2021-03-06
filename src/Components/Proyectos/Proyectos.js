import React from 'react';
import Sibebar from '../Layout/Sidebar';
import Barra from '../Layout/Barra';
import FormTarea from '../Tareas/FormTarea';
import ListadoTareas from '../Tareas/ListadoTarea';

const Proyectos = () => {
    return ( 
        <div className='contenedor-app'>

            <Sibebar/>

            <div  className='seccion-principal'>
                <Barra/>

                <main>
                    <FormTarea/>

                    <div className='contenedor-tareas'>
                        <ListadoTareas/>

                    </div>

                </main>

            </div>


        </div>
     );
}
 
export default Proyectos;