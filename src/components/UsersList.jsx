import React, { useContext } from 'react'
import UserRow from './UserRow'
import { UserContext } from '../context/userContext'

const UsersList = () => {

    const {users} = useContext(UserContext) 

  return (
    <>
        <p>Listado de usuarios</p>
        <table className='table table-hover table-striped'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>update2</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <UserRow 
                            key={user.id} 
                            user={user}
                        />
                    ))
                    
                }
            </tbody>
        </table>
    </>
  )
}

export default UsersList