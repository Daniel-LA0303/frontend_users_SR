import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { useUsers } from '../hooks/useUsers';
import { UserContext } from '../context/userContext';


const UserForm = ({userSelected, handlerCloseForm}) => {

    const {initialUserForm, handlerAddUser, errors} = useContext(UserContext)

    const [userForm, setUserForm] = useState(initialUserForm);

    const {id, username, password, email} = userForm;


    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: ''
    });
    }, [userSelected])

    const onInputChange = ({target}) => {
        // console.log(target.value);
        const {name, value} = target;
        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        //validacion
        // if(!username || (!password && id === 0) || !email){
        //     Swal.fire(
        //         'Error de validacion',
        //         'Todos los campos son obligatorios',
        //         'error'
        //     )
        //     return;
        // }

        // if(!email.indexOf('@')){
        //     Swal.fire(
        //         'Error de validacion',
        //         'Email no valido',
        //         'error'
        //     )
        //     return;
        // }
        //guadar en la base de datos
        // setUserForm(userForm);
        handlerAddUser(userForm);
    }

    const onClose = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }

  return (
    <>
        <p>Formulario de usuarios</p>
        <form 
            onSubmit={onSubmit}
        >
            <input 
                type="text" 
                className='form-control my-3 w-75'
                placeholder='Username'
                name='username'
                onChange={onInputChange}
                value={username}
            />
            <p className='text-danger'>{errors?.username}</p>
            {id > 0 || 
                <input 
                    type="password" 
                    className='form-control my-3 w-75'
                    placeholder='Password'
                    name='password'
                    onChange={onInputChange}
                    value={password}
                />
            }
            <p className='text-danger'>{errors?.password}</p>

            <input 
                type="email" 
                className='form-control my-3 w-75'
                placeholder='Email'
                name='email'
                onChange={onInputChange}
                value={email}
            />
            <p className='text-danger'>{errors?.email}</p>
            <input 
                type="hidden" 
                name='id'
                value={id}
            />
            <button
                type='submit'
                className='btn btn-primary btn-sm'
            >
                {id > 0 ? 'Update' : 'Add'}
            </button>
            {!handlerCloseForm ||
                <button
                    className='btn btn-primary mx-2 btn-sm'
                    // type='button'
                    // onClick={() => console.log("xd")}
                    onClick={() => onClose()}
                >
                Cerrar
                </button>
            }

        </form>

    </>
  )
}

export default UserForm