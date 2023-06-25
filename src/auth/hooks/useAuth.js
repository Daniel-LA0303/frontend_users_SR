import { useReducer } from "react"
import { loginReducer } from "../reducers/loginReducer"
import Swal from "sweetalert2"
import { loginUser } from "../services/authService"
import { useNavigate } from "react-router-dom"

const initialLogin = JSON.parse(sessionStorage.getItem('usersApp')) || {
    isAuth: false,
    isAdmin: false,
    user: undefined
  }


export const useAuth = () => {  

    const [login, dispatch] = useReducer(loginReducer, initialLogin)
    const navigate = useNavigate()

    const handlerLogin = async (username, password) => {
        // const {} = userLogin
        console.log(username, password);

        
        try{
          const res = await loginUser(username, password)
          console.log(res);
          const token = res.data.token
          const claims = JSON.parse(window.atob(token.split('.')[1]))
          console.log(claims);
          const user = { username: claims.sub}
          dispatch({  
            type: 'login',
            payload: {user, isAdmin: claims.isAdmin}
          })
          sessionStorage.setItem('usersApp', JSON.stringify({
            isAuth: true,
            isAdmin: claims.isAdmin,
            user
          }))
          sessionStorage.setItem('token_useraApp', `Bearer ${token}`)
          navigate('/users')
        }catch(error){
          if(error.response?.status === 401){
            Swal.fire(
                'Error de validacion',
                'Usuario o contraseña incorrectos',
                'error'
            )
          } else if(error.response?.status === 403){
            Swal.fire(
                'Error de permisos',
                'Usuario no autorizado',
                'error'
            )
          }else{
            throw error
          }
        }
      }
    
      const handlerLogout = () => {
        dispatch({  
          type: 'logout'
        })
        sessionStorage.removeItem('usersApp')
        sessionStorage.removeItem('token_useraApp')
        sessionStorage.clear()
      }
    

    return {
        login,
        handlerLogin,
        handlerLogout,
        
    }
}