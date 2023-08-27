import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const style = {display: "inline-block", margin: 50, marginBottom: 10,fontSize:"45px" , backgroundColor:"white"};
    const stylee = { backgroundColor:"white" ,marginBottom: 30};

    return (
        <div style={stylee}>
            <div>
                <h3 style={style}>
                    <Link to="/">Home</Link>
                </h3>
                <h3 style={style}>
                    <Link to="/amthal">Famous sayings</Link>
                </h3>
                <h3 style={style}>
                    <Link to="/gallery">Gallery</Link>
                </h3>
            </div>
        </div>
    );

}

export default Header;