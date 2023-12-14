import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { useUsers } from '../hooks/useUsers';
import { UserContext } from '../context/userContext';


const UserForm = ({userSelected, handlerCloseForm}) => {

    const {initialUserForm, handlerAddUser, errors} = useContext(UserContext)

    const [userForm, setUserForm] = useState(initialUserForm);
    const [checked, setChecked] = useState(userForm.admin);

    const {id, username, password, email, admin} = userForm;


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

    const onCheckBoxChange = () => {
        setChecked(!checked);
        setUserForm({
            ...userForm,
            admin: checked
        })
    }
  return (
    <>
        {/* <p className=' text-center'>Formulario de usuarios</p> */}
        
        <div class=" py-8">
            <h1 class="text-2xl mb-6 text-center">{id > 0 ? 'Update' : 'Registration'} Form</h1>
            <form 
                onSubmit={onSubmit}
                class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Name</label>
                <input 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-c_seco"
                    placeholder='Username'
                    name='username'
                    onChange={onInputChange}
                    value={username}
                    type="text" 
                    id="username"  
                />
            </div>
            <p className=' text-red-500'>{errors?.username}</p>
            {id > 0 || 
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-c_seco"
                    type="password" 
                    id="password" 
                    placeholder="********" 
                    name='password'
                    onChange={onInputChange}
                    value={password} />
            </div>}
            <p className='text-red-500'>{errors?.password}</p>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-c_seco"
                    type="email" 
                    id="email"                       
                    placeholder='email@email.com'
                    name='email'
                    onChange={onInputChange}
                    value={email}
                    />
            </div>
            <p className='text-red-500'>{errors?.email}</p>
            <div class="inline-flex items-center">
                <label
                    class="relative flex cursor-pointer items-center rounded-full p-3"
                    for="checkbox"
                    data-ripple-dark="true"
                >
                    <input
                        type="checkbox"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-c_seco checked:bg-c_seco checked:before:bg-c_seco hover:before:opacity-10"
                        id="checkbox"
                        name="admin"
                        onChange={onCheckBoxChange}
                        checked={admin}
                    />
                    <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                    >
                        <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                        ></path>
                    </svg>
                    </div>
                </label>
                <label className="ml-2 text-c_seco">Admin</label>
            </div>




            <input 
                type="hidden" 
                name='id'
                value={id}
            />
            <button
                class="w-full bg-c_seco text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-hover transition duration-300"
                type="submit">{id > 0 ? 'Update' : 'Add'}</button>
            </form>
        </div>

    </>
  )
}

export default UserForm