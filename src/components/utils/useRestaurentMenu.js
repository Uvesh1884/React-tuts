import { useEffect, useState } from "react";
import { RestroId } from "./constants";

const useRestaurentMenu = (resId)=>{

    const [resMenu, setresMenu] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(RestroId+resId);
        const json = await data.json();
        setresMenu(json.data);

    }

    return resMenu;
};

export default useRestaurentMenu;