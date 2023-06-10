import { useReducer } from "react"
import { loginReducer } from "../reducers/loginReducer"
import Swal from "sweetalert2"
import { loginUser } from "../services/authService"
import { useNavigate } from "react-router-dom"

const initialLogin = JSON.parse(sessionStorage.getItem('usersApp')) || {
    isAuth: false,
    user: undefined
  }


export const useAuth = () => {  

    const [login, dispatch] = useReducer(loginReducer, initialLogin)
    const navigate = useNavigate()

    const handlerLogin = (username, password) => {
        // const {} = userLogin
        console.log(username, password);
        const isLogin =  loginUser(username, password)
        if (isLogin){
          const user = { username: 'admin'}
          dispatch({  
            type: 'login',
            payload: user
          })
          sessionStorage.setItem('usersApp', JSON.stringify({
            isAuth: true,
            user
          }))
          navigate('/users')
        }else{
            Swal.fire(
                'Error de validacion',
                'Usuario o contraseña incorrectos',
                'error'
            )
        }
      }
    
      const handlerLogout = () => {
        dispatch({  
          type: 'logout'
        })
        sessionStorage.removeItem('usersApp')
      }
    

    return {
        login,
        handlerLogin,
        handlerLogout,
        
    }
}