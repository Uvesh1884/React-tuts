import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props)=>{
    const {data,showItems,setShowIndex} = props;

    const hendleClick = ()=>{
        
        setShowIndex();
    
    };

    return (
        <div className="m-4 cursor-pointer p-4 rounded-md bg-white shadow-lg transition-all duration-300 ease-in-out" onClick={hendleClick}>
           <div className="flex justify-between">
            <span className="font-bold">{data.title} ({data.itemCards.length })</span>
            <span>⏬</span>
            </div>
            <div>
                {showItems && <ItemList items = {data.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantCategory;