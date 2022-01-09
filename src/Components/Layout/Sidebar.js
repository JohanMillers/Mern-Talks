import React from 'react';
import ListadoProyectos from '../Proyectos/ListadoProyectos';
import NuevosProyectos from '../Proyectos/NuevosProyecto';

const Sibebar = () => {
    return ( 
        <aside>
            <h1>Mern<span>Tasks</span></h1>

            <NuevosProyectos/>

            <div className='proyectos'>
                <h2>Tus Proyectos</h2>

                <ListadoProyectos/>

            </div>
        </aside>
     );
}
 
export default Sibebar;