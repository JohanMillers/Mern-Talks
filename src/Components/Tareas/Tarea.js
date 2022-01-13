import React, {Fragment}from 'react';

const Tarea = ({tarea}) => {
    return ( 
        <Fragment>
            <li className='tarea sombra'>

            
                <p>{tarea.nombre}</p>

                <div className='estado'>
                    {tarea.estado

                      ?
                        (
                           <button
                               type="button"
                               className="completo"
                           >
                               Completado
                           </button> 
                        )

                      : 
                      (
                        <button
                            type="button"
                            className="incompleto"
                        >
                            Incompleto
                        </button> 
                     )
                    }
                </div> 

                <div className='acciones'>
                    <button
                        type='button'
                        className='btn btn-primario'
                    ><i class="fas fa-edit"></i>

                    </button>

                    <button
                        type='button'
                        className='btn btn-secundario'
                    ><i class="far fa-trash-alt"></i>

                    </button>

                </div>
            </li>

        </Fragment>
        
     );
}
 
export default Tarea;