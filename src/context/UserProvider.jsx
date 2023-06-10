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
        handlerShowForm
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
                handlerShowForm
            }}
        >
            {children}
        </UserContext.Provider>
    )
}