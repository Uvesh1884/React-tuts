import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "./utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const restaurantMenu = ()=>{
    
    const [showIndex, setShowIndex] = useState(null);
    const {resId} = useParams();
    
      const resMenu = useRestaurentMenu(resId);
    
    if(resMenu === null) return <Shimmer /> 

    const { name, cuisines,areaName } = resMenu?.cards[0]?.card?.card?.info;
    // console.log(resMenu?.cards[0]?.card?.card?.info)

    const {itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        // console.log( resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

        const catagories =  resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card.card["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

        // console.log(catagories);


    return (
      <div className="menu bg-slate-100 border w-[55rem] m-auto mt-6">
        <h2 className="m-4 font-bold text-start">{ name }</h2>
        <p className="m-4 text-sm">
        {cuisines.join(', ')} <br />
        {areaName}
        </p>
        {catagories.map((category,index)=>(
          <RestaurantCategory 
            key = {category.card.card.title} data={category.card.card}
            showItems = {showIndex === index ? true : false}
            setShowIndex = {()=>setShowIndex(index)}
            />

        ))}
      </div>
    );
};

export default restaurantMenu;