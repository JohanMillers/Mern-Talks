import React from 'react';
import Proyecto from './proyecto';

const ListadoProyectos = () => {

    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseno de Sitio Web '}

    ]

    return ( 
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto => (
                <Proyecto
                   proyeto={proyecto}
                
                />
            ))};

        </ul>
     );
}
 
export default ListadoProyectos;