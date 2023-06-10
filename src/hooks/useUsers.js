import { useReducer, useState } from "react";
import { userSigninReducer } from "../reducers/usersReducers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";

const initialUsers = [];
  
  const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
  }

 export const useUsers = () => {

    const [users, dispatch] = useReducer(userSigninReducer, initialUsers)
    const [userSelected, setUserSelected] = useState(initialUserForm) 
    const [visibleForm, setVisibleForm] = useState(false)

    const navigate = useNavigate()

    const getUsers = async () => {
      const result = await findAll();
      dispatch({
        type: 'loadingUsers',
        payload: result.data
      })
    }
  
    const handlerAddUser = async (user) => {
        console.log(user);
        let res;
        if(user.id === 0){
          res = await save(user);
        }else{
          res = await update(user);
        }
        
        dispatch({
          type: (user.id === 0) ? 'addUser' : 'updateUser',
          payload: res.data
        })
        

        Swal.fire(
            (user.id === 0) ? 'Usuario Agregado!' : 'Usuario Actualizado!',
            (user.id === 0) ? 'El usuario se agrego correctamente' : 'El usuario se actualizo correctamente',
            'success'
          )
        handlerCloseForm();
        navigate('/users')
      }
    
      const handlerRemoveUser = (id) => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                remove(id);
                dispatch({
                    type: 'removeUser',
                    payload: id
                  })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
          })


      }
    
      const handlerUpdateUser = (user) => {
        console.log(user);
        setVisibleForm(true);
        setUserSelected({...user});
      }

      const handlerShowForm = () => {
        setVisibleForm(true);
      }

      const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
      }

    return {
        users,
        userSelected,
        handlerAddUser,
        handlerRemoveUser,
        handlerUpdateUser,
        initialUserForm,
        initialUsers,
        visibleForm,
        setVisibleForm,
        handlerCloseForm,
        handlerShowForm,
        getUsers

    }
 }