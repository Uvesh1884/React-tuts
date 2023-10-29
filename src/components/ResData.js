import { IMG_URL } from "./utils/constants";
const ResData = (props)=>{
    const { resinfo } = props;

    const {
      name,
      cuisines,
      avgRating
    } = resinfo?.info;
    
    return(
      <div className="resCard">
        <img src= {IMG_URL + resinfo.info.cloudinaryImageId }/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
      </div>
    )
};

export default ResData;