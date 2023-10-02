import { useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import loginlogo from '../assets/loginlogo.svg'
import google from '../assets/Google svg.svg'
import facebook from '../assets/Facebook svg.svg'
import '../styles/Login.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const Register = async (e) => {
    e.preventDefault();
    // if(password.current.value !== confirmPassword.current.value){
    //   return setError("Passwords do not match")
    // }
  //   try{
  //     setError('')
  //     setLoading(true)
  //     const user = await createUserWithEmailAndPassword(auth, email, password);
  //     console.log(user);
  //     alert('Account created successfully')
  //     navigate("/User")
  //   } catch(error){
  //     setError("Failed to create an account")
  //   }
  //   setLoading(false)
  // };

  try{
    setError('')
    setLoading(true)
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    alert('Account created successfully')
    navigate("/User")
  } catch(error){
    setError("Failed to create an account")
  }
  setLoading(false)
};

  return (
    // <div className='container'>
        <div className='container'>
        <img src={loginlogo} alt="" />
        <div className='container'>
          <div className="login-inner">
          <h1 className="login-header text-center">Log In or Sign Up</h1>
          <p className="login-header-text">Join millions of others in sharing successful moves on HelpMeOut.</p>
          <button className="google-button">
            <img src={google} alt="" className="google-button-image"/>
            <p className="google-button-text">Continue with Google</p>
          </button>
          <button className="facebook-button">
            <img src={facebook} alt="" className="facebook-button-image"/>
            <p className="facebook-button-text">Continue with Facebook</p>
          </button>
          <div className="login-division-area">
            <hr />
            <hr />
           <p className="login-text">or</p> 
           <hr />
           <hr />
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={Register}>
            <Form.Group controlId="Email">
              <Form.Label>
                <b>Email:</b>
              </Form.Label>
              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Label>
                <b>Password:</b>
              </Form.Label>
              <Form.Control type="Password" onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Button disabled={loading} type="Submit" className="w-100">
              Sign Up
            </Button>
          </Form>
          </div>
          {/* {user?.email} */}
        </div>
        </div>
    // </div>
  )
}
