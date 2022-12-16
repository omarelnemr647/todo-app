import React, { useRef, useState } from "react"
import "./SignUp.css"
import { Form, Button, Card, Alert, FloatingLabel, Container } from "react-bootstrap"
import { Link, useNavigate} from "react-router-dom"
import {useAuth} from "../contexts/AuthContext"


function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError ] = useState('')
    const [loading, setLoading]= useState(false)
    const history = useNavigate()

   async function hanldeSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Password dos not match")
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history("/")
        } catch {
            setError("Failed to Sign Up")
        }
        setLoading(false)
    }



  return (
    <>
    <Container className="d-flex align-items-center justify-content-center"
    style={{minHeight:"100vh", width: "100%"}}
    >
      
      <div className="w-100" style={{maxWidth:"400px"}}>
      <Card>
        <Card.Body>
            
            <h2 className='text-center mb-4'>Sign Up</h2>
            {error&& <Alert variant="danger">{error}</Alert> }
            <Form onSubmit={hanldeSubmit}>
                <Form.Group id='email'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group id='password'>
                <FloatingLabel className="pass" controlId="floatingPassword" label="Password">
                    <Form.Control type='password' ref={passwordRef} required></Form.Control>
                </FloatingLabel>
                </Form.Group>
                <Form.Group id ="password-confirm">
                <FloatingLabel controlId="floatingPassword" label="Password Confirmation">
                   <Form.Control type = "password" ref={passwordConfirmRef} required></Form.Control>
                </FloatingLabel> 
                </Form.Group>
                <Button  disabled={loading} className='new-btn w-50' type='submit'>
                    Sign Up
                </Button>
            </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Have already an account? <Link to ="/login">Log in</Link>
      </div>
      </div>
    </Container>
    </>
  )
}

export default SignUp
