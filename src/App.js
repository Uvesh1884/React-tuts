import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import ReactContext from "./components/utils/ReactContext";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore.js";
import CartDetails from "./components/CartDetails.js";


const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About")); 

const Layout = () =>{

    const [userName, setUserName] = useState();

   useEffect(()=>{
       const data = {
        Name : "Uvesh Sadeki",
       }
       setUserName(data.Name);
   },[])

    return (
        <Provider store = {appStore}>
    <ReactContext.Provider value={{loggedInUser : userName,setUserName}}>
        <div className="app">    
        <Header />
        <Outlet />
        </div>
     </ReactContext.Provider>
     </Provider>
)}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Layout />,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <Suspense fallback = {"loading..."}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurents/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback = {<Shimmer />}>
                    <Grocery />
                    </Suspense> ,
            },
            {
                path : "/cart",
                element : <CartDetails />
            },
        ],
        errorElement : <Error />,
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />)
