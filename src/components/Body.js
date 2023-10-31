import ResData,{ openRestaurent } from "./ResData";
import { restro } from "./utils/mokeData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = ()=>{

  const [resList, setresList] = useState([]);
  const [searchText,setSearchText] = useState("");
  const [filteredRes, setfilteredRes] = useState([]);

  const StatusRestaurent = openRestaurent(ResData);

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
        <div className="flex">
          <div className="flex justify-center items-center mx-[10rem] searchBox">
            <input type="text" className="m-4 p-1 border-2 rounded-lg border-solid border-blue-500" value={searchText} onChange={
              (e)=>{
                setSearchText(e.target.value);
              }
              }
              />  
            <button className="hover:bg-black hover:text-white hover:shadow-xl transition-all 400ms ease m-4 p-1 border-2 border-solid rounded-lg border-black font-bold color-whit"
            onClick={()=>{
              const filteredRes = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRes(filteredRes);

            }}
            >Search keyword</button>
          </div>
          <button className="hover:bg-black hover:text-white hover:shadow-xl transition-all 400ms ease m-4 p-1 border-2 border-solid rounded-lg font-bold border-black " 
          onClick={()=>{
            const filteredList = resList.filter(
              (res)=> res.info.avgRating > 4
            );
            setresList(filteredList);
          }}
          >Top reated Restaurents</button>
        </div>
        <div className="flex flex-wrap px-[9rem] items-center justify-center">
         
      {
        filteredRes.map((restaurant)=>(
          <Link key = {restaurant.info.id} to={"/restaurents/"+restaurant.info.id}>

        {restaurant.info.isOpen ? <StatusRestaurent resinfo = {restaurant}/> : <ResData  resinfo = {restaurant}/>
        } 
          </Link>
        ))
      };


     
        </div>
        </div>
    )
};

export default Body;