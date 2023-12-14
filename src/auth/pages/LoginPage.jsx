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
        {/* <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">New</h5>
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
        </div> */}

        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <p className=' text-center text-3xl'>APP-Users</p>
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold text-[#355555]">
                            Sign up
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <form 
                                className="mx-auto max-w-xs"
                                onSubmit={onSubmit}
                            >
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="text" 
                                    placeholder="Username" 
                                    name='username'
                                    value={username}
                                    onChange={onInputChange}
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password" 
                                    placeholder="Password" 
                                    name='password'
                                    value={password}
                                    onChange={onInputChange}
                                />
                                <button
                                    type="submit" 
                                    className="mt-5 tracking-wide font-semibold bg-c_seco text-gray-100 w-full py-4 rounded-lg hover:bg-c_tert transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">
                                        Sign Up
                                    </span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by templatana's
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>
                                    and its
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-hover text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('./login.svg')" }}>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default LoginPage