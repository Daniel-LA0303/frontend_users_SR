import React, { useContext } from 'react'
import UserRow from './UserRow'
import { UserContext } from '../context/userContext'
import { AuthContext } from '../auth/context/AuthContext'

const UsersList = () => {

    const { users } = useContext(UserContext)
    const { login } = useContext(AuthContext)

    return (
        <>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-c_seco  dark:text-gray-400 ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                #
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            {!login.isAdmin || (
                                <>
                                    <th scope="col" class="px-6 py-3">Update</th>
                                    <th scope="col" class="px-6 py-3">Remove</th>
                                </>
                            )}
                        </tr>
                    </thead>
                    <tbody className=' text-c_seco'>
                        {users.map((user) => (
                            <UserRow key={user.id} user={user} isAdmin={login.isAdmin} />
                        ))}
                        </tbody>
                    
                </table>
            </div>
        </>
    )
}

export default UsersList