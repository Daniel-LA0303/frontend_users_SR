import { useContext } from "react"
import LoginPage from "./auth/pages/LoginPage"
import { useAuth } from "./auth/hooks/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { AuthContext } from "./auth/context/AuthContext";





function App() {
  
  const {login} = useContext(AuthContext);

  return (
    <Routes>
      {login.isAuth ? (
        <Route  path="/*" element={<UserRoutes />} />
      )
        
        :
        <>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/*' element={<Navigate to='/login'/>}/>
        </>
      }
      {/* // <LoginPage /> */}
      {/* <UsersPage /> */}

    </Routes>
  )
}

export default App
