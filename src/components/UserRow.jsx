import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const UserRow = ({user}) => {

    const {handlerRemoveUser ,handlerUpdateUser} = useContext(UserContext)

    return (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <button
                    className='btn btn-secondary btn-sm'
                    type='button'
                    onClick={() => handlerUpdateUser({
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        password: user.password
                    })}
                >Update</button>
            </td>
            <td>
                <NavLink className='btn btn-secondary btn-sm' to={`/users/edit/${user.id}`}>Update2</NavLink>
            </td>
            <td>
                <button
                    className='btn btn-danger btn-sm'
                    type='button'
                    onClick={() => handlerRemoveUser(user.id)}
                >Remove</button>
            </td>
        </tr>
    )
}

export default UserRow