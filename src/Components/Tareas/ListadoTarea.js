import React,{Fragment} from 'react';
import Tarea from './Tarea';



const ListadoTareas = () => {

    const tareasProyecto = [
        {nombre: 'Elegir Plataforma', estado : true},
        {nombre: 'Elegir Colores', estado : false},
        {nombre: 'Elegir Plataforma de Pago', estado : false},
        {nombre: 'Elegir Hosting', estado : true}
        
    ];

    return ( 
        <Fragment>

            <h2>Proyecto: Tienda Virtual</h2>

            <ul className='listado-tareas'> 
                 {tareasProyecto.length === 0 
                    ?(<li className='tarea'>No hay tarea</li>)
                    :(tareasProyecto.map(tarea => (
                        <Tarea
                           tarea={tarea}
                        
                        />
                    )))
                 
                 }

            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
            >Eliminar Proyecto <i class="far fa-trash-alt"></i>
            </button>

        </Fragment>
        
     );
}
 
export default ListadoTareas;