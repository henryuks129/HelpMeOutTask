import { useState } from "react";
import { auth } from "../Firebase";
import { Link, useParams } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import searchicon from '../assets/search-normal.svg'
import NewFooter from '../layouts/NewFooter'
import webcard1 from '../assets/WEB CARD1.svg'
import webcard2 from '../assets/WEB CARD2.svg'
import webcard3 from '../assets/WEB CARD3.svg'
import webcard4 from '../assets/WEB CARD4.svg'
import '../styles/User.css'

export default function User() {
    const [user, setUser] = useState({});
    const {id} = useParams();

  onAuthStateChanged(auth, (currentUser) => {
    // if(!currentUser){}
    setUser(currentUser);
  });

  return (
    <div className='user-main-body'>
        <div className="">
        <NewFooter/>
        <div className="d-flex justify-content-between align-items-center container">
            <div>
                <h1 className="user-header">Hello, {user?.email}</h1>
                <p className="user-header-text">Here are your recorded videos</p>
            </div>
            <div className="user-search-body d-flex">
                <img src={searchicon} alt="" className="search-icon"/>
                <input type="search" className="user-input-body" placeholder="Search for a particular video"/>
            </div>
        </div>
            <hr className="user-horizontal-line"/>
            <div className="container user-images-main">
            <div className="user-images-body">
                <div className="mt-4 mb-4">
                    <p className="user-images-text mb-3">Recent files</p>
                    <div className="d-flex justify-content-between gap-5">
                        <Link to={`/Details/${id}`}>
                        <img src={webcard1} alt="" className="user-webcard-1 img-fluid"/>
                        </Link>
                        <Link to={`/Details/${id}`}>
                        <img src={webcard2} alt="" className="user-webcard-2 img-fluid"/>
                        </Link>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="user-images-text mb-3">Files from last week</p>
                    <div className="d-flex justify-content-between gap-5">
                        <Link to={`/Details/${id}`}k>
                        <img src={webcard3} alt="" className="user-webcard-3 img-fluid"/>
                        </Link>
                        <Link to={`/Details/${id}`}>
                        <img src={webcard4} alt="" className="user-webcard-4 img-fluid"/>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
