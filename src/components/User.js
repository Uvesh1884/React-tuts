import { useState, useEffect, useContext } from "react";
import ReactContext from "./utils/ReactContext";


export const User = ()=>{
    const [userInfo, setUserInfo] = useState({
        name : "user name",
        location: "user location",
        avtar : "https://photo.com"
    });

    // const {loggedInUser} = useContext(ReactContext);
    
    useEffect(()=>{
        const userData = async()=>{
            const data = await fetch("https://api.github.com/users/Uvesh1884");
            const json = await data.json();
            // console.log(json);
            setUserInfo(json);            
        };
        userData();
    },[])
    // const { name, location, avatar_url} = ;
    return(
        <div className="user">
            {/* <h2>{loggedInUser}</h2> */}
            <img src={userInfo.avatar_url} />
            <h3>name: {userInfo.name} </h3>
            <h3>location: {userInfo.location}</h3>
            <h4>Contact : usadeki@gmail.com</h4>
        </div>
    );
};
