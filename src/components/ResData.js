import { useContext } from "react";
import { IMG_URL } from "./utils/constants";
import ReactContext from "./utils/ReactContext";
const ResData = (props)=>{
    const { resinfo } = props;

    const {
      name,
      cuisines,
      avgRating
    } = resinfo?.info;

    const {loggedInUser} = useContext(ReactContext)
    
    return(
      <div className="p-3 hover:shadow-2xl transition-all 500ms ease-in bg-slate-300 hover:bg-transparent cursor-pointer h-[17.9rem] m-2 flex flex-col items-center h-39 items-start border-2 border-solid border-black rounded-lg w-[200px]">
       <div className=" flex items-center shadow-lg">
        <img className="w-[100px] h-[100px] rounded-lg flex items-center" src= {IMG_URL + resinfo.info.cloudinaryImageId }/>
        </div>
        <div className="mt-2 flex flex-col text-start">
        <h3 className="flex items-center font-bold text-sm">{name}</h3>
        <h4><small>Cuisines: {cuisines.join(", ")}</small></h4>
        <h4><small>Rating : {avgRating}</small></h4>
        <h3>{loggedInUser}</h3>
        </div>
      </div>
    )
};
// hire order component

export const openRestaurent = (ResData)=>{
  return (props)=>{
    return(
      <div>
        <label className="text-white absolute rounded-tr-lg rounded-br-lg bg-black m-2 p-2">OpEn</label>
        <ResData {...props} />
      </div>
    );
  };
};

export default ResData;