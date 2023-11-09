import { LOGO_URL } from "./utils/constants";
import { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import ReactContext from "./utils/ReactContext";
import { useSelector } from "react-redux";



export  const Header = ()=>{

    const [btn,setBtn] = useState("login");
    
    useEffect(()=>{
        // console.log("useEffect called")
    },[btn])
    
    const status = useOnlineStatus();

    const {loggedInUser} = useContext(ReactContext);

    const cartItems = useSelector((store)=>store.cart_bag.items);

    console.log(cartItems);
    
    return(
          
        <div className="flex justify-around bg-slate-100 w-[100%]">
        <div className="w-20 ">
            <img src= {LOGO_URL} />
        </div>
        <div className="flex items-center text-center">
            <ul className="flex text-center font-semibold">
                <li className="px-4 hover:text-orange-500">Status: {status ? "online🟢" : "offline🔴"}</li>
                <li className="px-4 hover:text-orange-500"><Link to="/">Home</Link > </li>
                <li className="px-4 hover:text-orange-500"><Link to="/about">About Us</Link></li>
                <li className="px-4 hover:text-orange-500"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4 hover:text-orange-500"><Link to="/grocery">Grocery-mart</Link></li>
                <li className="px-4 hover:text-orange-500"><Link to="/cart">Cart - ({cartItems.length}-items)</Link></li>

                <li className="px-4">sign in</li>
                <button className="px-4 mx-2 border border-solid border-blue-500 rounded-lg font-bold" onClick={()=>{
                      btn === "login" ? setBtn("logout") : setBtn("login");
                    }}>{btn}</button>
                    <li>{loggedInUser}</li>
            </ul>
        </div>
    </div>
    )   
};