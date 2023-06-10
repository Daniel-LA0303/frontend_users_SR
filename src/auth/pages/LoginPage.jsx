import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../context/AuthContext'

const initialLoginForm = {
    username: '',
    password: ''
}

const LoginPage = () => {

    const {handlerLogin} = useContext(AuthContext)

    const [loginForm, setLoginForm] = useState(initialLoginForm)
    const {username, password} = loginForm

    const onInputChange = ({target}) => {
        const {name, value} = target
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }

    const onSubmit = (e) => {   
        e.preventDefault()
        if(!username || !password){
            Swal.fire(
                'Error de validacion',
                'Todos los campos son obligatorios',
                'error'
            )   
        }
        console.log(username, password);
        handlerLogin(username, password)

        setLoginForm(initialLoginForm)
    }

  return (
    <div className="modal" style={{display:'block'}} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                </div>
                <form 
                    onSubmit={onSubmit}
                >
                    <div className="modal-body">
                        <input 
                            type="text" 
                            className='form-control my-3 w-75'
                            placeholder='Username'
                            name='username'
                            value={username}
                            onChange={onInputChange}
                        />
                        <input
                            type="password"
                            className='form-control my-3 w-75'
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={onInputChange}
                        />
                        
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                        >Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage