import ResData from "./ResData";
import { restro } from "./utils/mokeData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = ()=>{

  const [resList, setresList] = useState([]);
  const [searchText,setSearchText] = useState("");
  const [filteredRes, setfilteredRes] = useState([]);

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0224734&lng=72.5715931&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);

    setresList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  // use 
    const status = useOnlineStatus();
    
    if(status === false)

      return(
        <h1>Check your connection</h1>
      )

    return resList.length === 0 ? <Shimmer /> : (
        <div className="body">
        <div className="filter">
          <div className="searchBox">
            <input type="text" className="search" value={searchText} onChange={
              (e)=>{
                setSearchText(e.target.value);
              }
              }
              />  
            <button className="searchBtn"
            onClick={()=>{
              const filteredRes = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRes(filteredRes);

            }}
            >Search keyword</button>
          </div>
          <button className="filter-btn" 
          onClick={()=>{
            const filteredList = resList.filter(
              (res)=> res.info.avgRating > 4
            );
            setresList(filteredList);
          }}
          >Top reated Restaurents</button>
        </div>
        <div className="resContainer">
         
      {
        filteredRes.map((restourent)=>(
          <Link key = {restourent.info.id} to={"/restaurents/"+restourent.info.id}><ResData  resinfo = {restourent}/></Link>
        ))
      }
        </div>
        </div>
    )
};

export default Body;