import React from "react";

class ClassUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo : {
                name : "user name",
                location : "user location",
                avatar : "http://avatar.com"
            }
        }
        // console.log(" child Constructor")
    };

    async componentDidMount(){
        // console.log("componentDidMount");
        const data = await fetch("https://api.github.com/users/Uvesh1884");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        });
    }

    componentDidUpdate(){
        console.log("component will update");
    }

    componentWillUnmount(){
        console.log("component  Will Unmount");
    }

    render() {
        // console.log("child render")
        const {name,location,avatar_url} = this.state.userInfo;
        return(
            <div className="user">
                <img src={avatar_url}/>
            <h3>name: {name} </h3>
            <h3>location: {location}</h3>
            <h4>Contact : usadeki@gmail.com</h4>
        </div>
        );
    }
};

export default ClassUser;