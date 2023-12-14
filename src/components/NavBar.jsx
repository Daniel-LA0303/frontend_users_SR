import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';
import { UserContext } from '../context/userContext';

const NavBar = () => {

    const {handlerLogout, login} = useContext(AuthContext)

    const[open, setOPen] = useState(false);
    const[openMobile, setOPenMobile] = useState(false);
    // const {login} = useContext(UserContext)

  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className='container-fluid'>
    //         <a className="navbar-brand" href="#">UsersApp</a>
    //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon"></span>
    //         </button>

    //         <div className="collapse navbar-collapse " id="navbar">
    //             <ul className='navbar-nav'>
    //                 <li className='nav-item'>
    //                     <NavLink className="nav-link" to="/users">Usuarios</NavLink>
    //                 </li>
    //                 {
    //                     !login.isAdmin ||
    //                     <li className='nav-item'>
    //                         <NavLink className="nav-link" to="/users/register">Register</NavLink>
    //                     </li>
    //                 }

    //             </ul>
    //         </div>

    //         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    //             <span className="nav-item nav-link text-primary mx-3" >{login.user?.username}</span>
    //             <button
    //                 onClick={() => handlerLogout()}
    //                 className='btn btn-success btn-sm'
    //             >
    //                 Logout
    //             </button>
    //         </div>
    //     </div>
    // </nav>
    <nav className="bg-c_seco">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

        <button
            onClick={() => setOPenMobile(!openMobile)} 
            type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>

          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
            <p className=' text-white text-xl'>Users-APP</p>
        </div>
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                <NavLink to="/users" >
                    <p className="bg-c_tert text-white hover:bg-[#355555] rounded-md px-3 py-2 text-sm font-medium">Users</p>
                </NavLink>
                <NavLink to="/users/register">
                    <p className="bg-c_tert text-gray-300 hover:bg-[#355555] hover:text-white rounded-md px-3 py-2 text-sm font-medium">New User</p>
                </NavLink>
            </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="relative ml-3">
          <div>
            <button 
                onClick={() => setOPen(!open)}
                type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="./user.png" alt="" />
            </button>
          </div>


            {
                open && (
                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

                    <div href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</div>
                    <div href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">User: <span className='text-[#355555] font-bold text-lg'>{login.user?.username}</span></div>
                    <div href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">
                        <div>
                            <button
                                onClick={() => {
                                    setOPen(!open)
                                    handlerLogout()
                                }}
                                className=" bg-c_tert text-white hover:bg-[#355555] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                  </div>
                )
            }
        </div> 
      </div>
    </div>
  </div>


  {
    openMobile && (
        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <NavLink 
                    onClick={() => setOPenMobile(!openMobile)}
                    to="/users" >
                    <p className=" bg-c_tert my-1 text-gray-300 hover:bg-[#355555] hover:text-white rounded-md px-3 py-2 text-sm font-medium">Users</p>
                </NavLink>
                <NavLink 
                    onClick={() => setOPenMobile(!openMobile)}
                    to="/users/register">
                    <p className=" bg-c_tert text-gray-300 hover:bg-[#355555] hover:text-white rounded-md px-3 py-2 text-sm font-medium">New User</p>
                </NavLink>
            </div>
      </div>
    )
  }      

</nav>
  )
}

export default NavBar