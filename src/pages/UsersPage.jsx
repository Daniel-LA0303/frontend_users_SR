import React, { useContext, useEffect } from 'react'
import { useUsers } from '../hooks/useUsers';
import UserModalForm from '../components/UserModalForm';
import UsersList from '../components/UsersList';
import { UserContext } from '../context/userContext';
import { AuthContext } from '../auth/context/AuthContext';

const UsersPage = () => {

  const {
    users,
    userSelected,
    handlerAddUser,
    handlerRemoveUser,
    handlerUpdateUser,
    initialUserForm,
    initialUsers,
    visibleForm,
    handlerCloseForm,
    handlerShowForm,
    getUsers
  } = useContext(UserContext)

  const {login} = useContext(AuthContext)

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
    {!visibleForm || 
      <UserModalForm 

      />
    }
      <div className=''>
        <h2 className=' text-center py-10 text-4xl text-hover font-bold'>Users Content</h2>
        <div className=''>          
          <div className=''>
            {users.length === 0
              ? <p className=''>No hay usuarios</p>
              :             
              <UsersList 
              />
            }

          </div>
        </div>

      </div>
    </>
  )
}

export default UsersPage