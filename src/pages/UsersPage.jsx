import React, { useContext } from 'react'
import { useUsers } from '../hooks/useUsers';
import UserModalForm from '../components/UserModalForm';
import UsersList from '../components/UsersList';
import { UserContext } from '../context/userContext';

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
    handlerShowForm
  } = useContext(UserContext)

  return (
    <>
    {!visibleForm || 
      <UserModalForm 

      />
    }
      <div className='container my-4'>
        <h2>Users App</h2>
        <div className='row'>
          
            {/* {visibleForm &&  
              <div className='col'>
                
              </div>
          } */}

          
          <div className='col'>
            {!visibleForm &&
              <button
                className='btn btn-primary my-2'
                type='button'
                onClick={handlerShowForm}
              >
                Nuevo Usuario
              </button>
            }

            {users.length === 0
              ? <p className='alert alert-warning'>No hay usuarios</p>
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