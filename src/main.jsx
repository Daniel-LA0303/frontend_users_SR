import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './UsersApp.jsx'
import './index.css'
import LoginPage from './auth/pages/LoginPage.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)