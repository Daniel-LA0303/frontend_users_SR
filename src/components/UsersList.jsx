import React, { useContext } from 'react'
import UserRow from './UserRow'
import { UserContext } from '../context/userContext'
import { AuthContext } from '../auth/context/AuthContext'

const UsersList = () => {

    const { users } = useContext(UserContext)
    const { login } = useContext(AuthContext)

    return (
        <>
            <div className="md:px-32 py-8 w-full">
                <div className="shadow overflow-hidden rounded border-b border-gray-200">
                    <div className="min-w-full overflow-x-auto">
                    <table className="bg-white text-sm sm:text-base">
                        <thead className="bg-c_seco text-white">
                        <tr>
                            <th className="w-1/5 sm:w-1/12 text-left py-3 px-4 uppercase font-semibold text-sm">#</th>
                            <th className="w-1/5 sm:w-1/12 text-left py-3 px-4 uppercase font-semibold text-sm">Username</th>
                            <th className="w-1/5 sm:w-4/12 text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                            {!login.isAdmin || (
                            <>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Update</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Remove</th>
                            </>
                            )}
                        </tr>
                        </thead>
                        <tbody className="text-gray-700">
                        {users.map((user) => (
                            <UserRow key={user.id} user={user} />
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UsersList