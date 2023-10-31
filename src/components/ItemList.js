import { IMG_URL } from "./utils/constants";
const ItemList = ({items})=>{

    const hendleClick = ()=>{
        console.log("Clicked")
    }
    return <div>
        {items.map((item=>(
            <div key={item.card.info.id} onClick={hendleClick} className="flex justify-between border-b-2">
            <div className="my-4 p-4">
            <ul>
            <li className="font-bold my-2">{item.card.info.name}</li>
            <li className="text-sm">₹ {item.card.info.price/100}</li>
            </ul>
            <div>
                <p className="text-slate-500 text-sm my-3 w-[35rem]">{item.card.info.description}</p>
            </div>
            </div>
            <div className="my-4 p-4 relative">
                <img className="relative w-[7rem] shadow-xl rounded-lg" src={IMG_URL + item.card.info.imageId} />
                <button className="absolute m-auto px-[2.5rem] top-20 border bg-green-300 bg-opacity-70 rounded-lg">ADD</button>
                </div>
            </div>
        )))}
    </div>;
};

export default ItemList;