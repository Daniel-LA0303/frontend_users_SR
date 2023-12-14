import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import { AuthContext } from '../auth/context/AuthContext'

const UserRow = ({ user }) => {

    const { handlerRemoveUser, handlerUpdateUser } = useContext(UserContext)
    const { login } = useContext(AuthContext)

    return (
        <tr key={user.id}
            className='border-b hover:bg-gray-100'
        >
            <td className="w-1/5 sm:w-1/12 text-left py-3 px-4">{user.id}</td>
            <td className="w-1/5 sm:w-1/12 text-left py-3 px-4">{user.username}</td>
            <td className="w-1/5 sm:w-4/12 text-left py-3 px-4">{user.email}</td>
            {
                !login.isAdmin ||
                <>
                    <td className="w-1/5 sm:w-2/12 text-left py-3 px-4">
                        <NavLink className='bg-blue-600 hover:bg-blue-500 p-2 rounded text-white text-xs sm:text-base' to={`/users/edit/${user.id}`}>Update</NavLink>
                    </td>
                    <td className="w-1/5 sm:w-2/12 text-left py-3 px-4">
                        <button
                            className='bg-red-600 hover:bg-red-500 p-2 rounded text-white text-xs sm:text-base'
                            type='button'
                            onClick={() => handlerRemoveUser(user.id)}
                        >Remove</button>
                    </td>
                </>
            }
        </tr>
    )
}

export default UserRow