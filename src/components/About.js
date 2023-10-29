import { User } from "./User";
import React from "react";
import ClassUser from "./ClassUser";
import { render } from "react-dom";

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
        <div>
          <h1>About Us</h1>
            <h2>User info</h2>
            <div className="userData">
            {/* <User name = {"Uvesh Sadeki (func)"} location={"Garibnawaz park 2"} /> */}
            <ClassUser name = {"Ubeid Sadeki (class)"} location={"foolwadi sheri"} />
            </div>
        </div>
      )
    }
};

export default About;