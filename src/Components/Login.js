import React, { useRef, useState } from 'react'
import {Alert, Button, Card, Form, FloatingLabel, Container} from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const [error, setError]= useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handelSubmit(e){
    e.preventDefault()
    try{
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history("/")
    }catch{
      setError("Faild to Log in")
    }
    setLoading(false)
  }

  return (
    <>
    <Container className="d-flex align-items-center justify-content-center"
    style={{minHeight:"100vh", width: "100%"}}
    >
      
      <div className="w-100" style={{maxWidth:"400px"}}>
    <Card style ={{minHeight:"300px"}}>
      <Card.Body>
        <h2 className='text-center mb-4'>Log In</h2>
        {error&& <Alert variant='danger' >{error}</Alert>}
        <Form onSubmit={handelSubmit}>
          <Form.Group style={{margin:"15px 0px 15px 0px"}} id = 'email'>
            <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3"
                    >
                    <Form.Control type='email' ref={emailRef} required></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Form.Group style={{margin:"15px 0px 15px 0px"}} id = "password">
            <FloatingLabel className="pass" controlId="floatingPassword" label="Password">
                      <Form.Control type='password' ref={passwordRef} required></Form.Control>
                  </FloatingLabel>
            </Form.Group>
          <Button style={{margin:"15px 0px 15px 0px"}} className='new-btn w-50' type ="submit" disabled={loading}>Log In</Button>
        </Form>
      </Card.Body>
    </Card>
    <div className='to-signup'>
      Need an Account ? <Link to ="/signup">Sign up</Link>
    </div>
    </div>
    </Container>
    
    </>
  )
}

export default Login
