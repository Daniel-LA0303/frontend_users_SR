import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';

const NavBar = () => {

    const {handlerLogout, login} = useContext(AuthContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container-fluid'>
            <a className="navbar-brand" href="#">UsersApp</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbar">
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/users">Usuarios</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/users/register">Register</NavLink>
                    </li>
                </ul>
            </div>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <span className="nav-item nav-link text-primary mx-3" >{login.user?.username}</span>
                <button
                    onClick={() => handlerLogout()}
                    className='btn btn-success btn-sm'
                >
                    Logout
                </button>
            </div>
        </div>
    </nav>
  )
}

export default NavBar