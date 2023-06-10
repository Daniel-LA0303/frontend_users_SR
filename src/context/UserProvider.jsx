import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./userContext"


export const UserProvider = ({children}) => {

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
      } = useUsers();

 
    return (
        <UserContext.Provider
            value={{
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
            }}
        >
            {children}
        </UserContext.Provider>
    )
}