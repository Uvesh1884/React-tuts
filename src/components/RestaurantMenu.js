import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "./utils/useRestaurentMenu";

const restaurantMenu = ()=>{
    
    
    const {resId} = useParams();
    
      const resMenu = useRestaurentMenu(resId);
    
    if(resMenu === null) return <Shimmer /> 

    const { name, areaName, city, cuisines } = resMenu?.cards[0]?.card?.card?.info;

    const {itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        console.log(itemCards);
    return (
      <div className="menu">
        <h2>{ name }</h2>
        <p>
        {cuisines}
        </p>
        <h2>Menu items</h2>
       <ul>
        {itemCards.map((item)=>
        <li key={item.card.info.id}>
            {item.card.info.name}<span> {item.card.info.price} </span>
        </li>)
        }
       </ul>
      </div>
    );
};

export default restaurantMenu;