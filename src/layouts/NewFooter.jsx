import { useState } from "react";
import { auth } from "../Firebase";
import { onAuthStateChanged, } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import profile from '../assets/profile-circle.svg'
import dropdown from '../assets/arrow-down.svg'
import login from '../assets/loginlogo.svg'
import '../styles/NewNavbar.css'

export default function NewFooter() {
  const [user, setUser] = useState({});

  // const logout = async ()=>{
  //     await signOut(auth);
  //     alert("Logout Successful")
  //     navigate("/")
  // }

  // const signuproute = async ()=>{
  //   navigate("/Signup");
  // }

  onAuthStateChanged(auth, (currentUser) => {
    // if(!currentUser){}
    setUser(currentUser);
  });

  return (
    <div className="container">
      <div className="d-flex justify-content-between pt-4 mb-4">
        <div className="">
          <Link to={"/"} className="text-decoration-none d-flex gap-1 align-items-center justify-content-center">
          <img src={login} alt="" className="new-navbar-logo"/>
          <p className="new-navbar-text mt-3">HelpMeOut</p>
          </Link>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <img src={profile} alt="" className="new-navbar-profile"/>
          <div className="new-navbar-username">{user?.email}</div>
          <img src={dropdown} alt="" className="new-navbar-dropdown"/>
        </div>
      </div>
    </div>
  );
}
