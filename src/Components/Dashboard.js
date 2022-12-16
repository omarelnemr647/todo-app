import React, {useState} from 'react'
import TodoApp from '../Todo/TodoApp'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from "../contexts/AuthContext"
import {Button, Alert} from "react-bootstrap" 
import {useNavigate} from "react-router-dom"

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavBar from '../Todo/components/NavBar';


function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <>
      <NavBar
      logOut ={handleLogout}
      user={currentUser.email}
       />
    {error&& <Alert variant="danger">{error}</Alert> }
    <div>
      <TodoApp />
    </div>
      
    </>
  )
}

export default Dashboard
