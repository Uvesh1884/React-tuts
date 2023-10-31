import React, { Suspense, lazy } from "react";
import ReactDOM  from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";


const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About")); 

const Layout = () =>{
    return <div>
        <Header />
        <Outlet />
    </div>
}

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
            }
        ],
        errorElement : <Error />,
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />)
