import React from "react";
import Logo from "./../../../Images/logo.jpg"
import classes from "./logo.module.css"

const logo = (props) => (
    <div>
        <img className={classes.logo} src={Logo} alt="Logo"/>
    </div>
);

export default logo;