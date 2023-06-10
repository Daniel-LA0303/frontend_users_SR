import { Navigate, Route, Routes } from "react-router-dom"
import UsersPage from "../pages/UsersPage"
import NavBar from "../components/NavBar"
import RegisterPage from "../pages/RegisterPage"
import { useUsers } from "../hooks/useUsers"
import { UserProvider } from "../context/UserProvider"
import { useContext } from "react"

export const UserRoutes = () => {


    return (
        <>
            <UserProvider>
                <NavBar />
                <Routes>
                    <Route path='users' element={
                        <UsersPage 
                        />} />
                    <Route path='users/register' element={<RegisterPage 

                    />} />
                    <Route path='users/edit/:id' element={<RegisterPage

                    />} />
                    <Route path='/' element={<Navigate to="/users"/>} />
                </Routes>
            </UserProvider>
        </>
    )
}