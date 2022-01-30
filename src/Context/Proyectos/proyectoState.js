import React,{useReducer} from 'react';

import proyectoContext from './proyectoContext';
import proyectoreducer from './proyectoReducer'

const ProyectoState = props => {
    const inicialState = {
        formulario : true
    }
    //Dispatch para ejecutar las acciones
    
    const [state, dispatch] = useReducer (proyectoreducer, inicialState);
    
    //Serie de funciones para el CRUD
    
    return (
        <proyectoContext.Provider
    
            value={{
                formulario: state.formulario
            }}
        
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
