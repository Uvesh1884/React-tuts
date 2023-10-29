import { useRouteError } from "react-router-dom";
const Error = ()=>{
    
    const err = useRouteError();
    console.log(err);

    return(
        <div className="Error">
            <h1>Oppss..</h1>
            <h2>Somthing wents wrong</h2>
            <h3>{err.status} {err.statusText}</h3>
        </div>
    );
};

export default Error;