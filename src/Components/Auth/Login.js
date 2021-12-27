import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    //State para inciar sesion
    const [usuario, SetUsuario] = useState({
        email: '',
        password: ''
    });
    //State para inciar sesion

    //Extraer usuario
    const {email, password} = usuario;
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

        //Pasarlo al action
    }



    return ( 
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
              <h1>Inciar Sesion</h1>

              <form
                 onSubmit={OnSubmit}
              
              >

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
                      <input type="submit" className=' btn btn-primario btn-block' value="Iniciar Sesion"/>
                  </div>
              </form>

              <Link to={'/nueva-cuenta'} className='enlance-cuenta mt-4'>
                  Obtener Cuenta
              </Link>

            </div>
        </div>
     );
}
 
export default Login;