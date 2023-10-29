import { LOGO_URL } from "./utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
export  const Header = ()=>{

    const [btn,setBtn] = useState("login");
    
    useEffect(()=>{
        console.log("useEffect called")
    },[btn])
    
    const status = useOnlineStatus();
    
    return(
          
        <div className="header">
        <div className="logo">
            <img src= {LOGO_URL} />
        </div>
        <div className="opt">
            <ul>
                <li>Status: {status ? "online" : "offline"}</li>
                <li><Link to="/">Home</Link > </li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/grocery">Grocery-mart</Link></li>

                <li>sign in</li>
                <button className="btn" onClick={()=>{
                      btn === "login" ? setBtn("logout") : setBtn("login");
                }}>{btn}</button>
            </ul>
        </div>
    </div>
    )   
};