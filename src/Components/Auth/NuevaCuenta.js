import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    //State para inciar sesion
    const [usuario, SetUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });
    //State para inciar sesion

    //Extraer usuario
    const {nombre, email, password, confirmar} = usuario;
    //Extraer usuario

    

    const onChange = e => {
        SetUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el ususari quiere iniciar Sesion
    const OnSubmit = e => {
        e.preventDefault();

        //Validar que no hay campo vacio

        //Password minimo 6 caracteres

        //Los Password deber ser iguales

        //Pasarlo al action
    }



    return ( 
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
              <h1>Obtener una cuenta </h1>

              <form
                 onSubmit={OnSubmit}
              
              >

                  <div className='campo-form'>
                      <label htmlFor='nombre'>Nombre</label>
                      <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          placeholder="Tu Nombre"
                          value={nombre}
                          onChange={onChange}
                      />
                  </div>
                  <div className='campo-form'>
                      <label htmlFor='email'>Email</label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Tu Email"
                          value={email}
                          onChange={onChange}
                      />
                  </div>
                  <div className='campo-form'>
                      <label htmlFor='password'>Password</label>
                      <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Tu Password"
                          value={password}
                          onChange={onChange}
                      />
                  </div>
                  <div className='campo-form'>
                      <label htmlFor='confirmar'>Confirma Password</label>
                      <input
                          type="password"
                          id="confirmar"
                          name="confirmar"
                          placeholder="Repite Tu Password"
                          value={confirmar}
                          onChange={onChange}
                      />
                  </div>
                  <div className='campo-form'>
                      <input type="submit" className=' btn btn-primario btn-block' value="Registrarme"/>
                  </div>
              </form>

              <Link to={'/'} className='enlance-cuenta mt-4'>
                  Volver a Iniciar Sesion
              </Link>

            </div>
        </div>
     );
}
 
export default NuevaCuenta;