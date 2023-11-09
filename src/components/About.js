import { User } from "./User";
import React from "react";
import ClassUser from "./ClassUser";
import { render } from "react-dom";
import ReactContext from "./utils/ReactContext";
class About extends React.Component {
    constructor(props){
        super(props);
        // console.log("parent constructor");
    };

    componentDidMount(){
        // console.log("parant componentdidMount");
    }

    render() {
        // console.log("parent render")
      return (
        <div className="border w-[25rem] m-auto my-5">
          <h1 className="font-bold m-4">About Us</h1>
            <h2 className="text-center">User info</h2>
            <div>
                <ReactContext.Consumer>
                {({loggedInUser})=> <h1 className="text-center">{loggedInUser}</h1>}
                </ReactContext.Consumer>
                </div>
            <div className="userData">
            {/* <User name = {"Uvesh Sadeki (func)"} location={"Garibnawaz park 2"} /> */}
            <ClassUser name = {"Ubeid Sadeki (class)"} location={"foolwadi sheri"} />
            </div>
        </div>
      )
    }
};

export default About;