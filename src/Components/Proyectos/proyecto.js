import React from 'react';


const Proyecto = ({proyeto}) => {
    return ( 
        <li>
            <button
                type='button'
                className='btn btn-blank'
            >
                {proyeto.nombre}
            </button>
        </li>
     );
}
 
export default Proyecto;