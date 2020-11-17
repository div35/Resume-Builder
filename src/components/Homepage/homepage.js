import React, { Component } from "react";
import classes from "./homepage.module.css"
import { NavLink } from "react-router-dom"
import Logo from "./../../Images/logo2.png"

class Homepage extends Component {
    render() {
        return (
            <div>
                <div className={classes.home}>
                    <h2>Create a resume that stands out</h2>
                    <p>Create a Resume that perfectly describes your skills and match job profile.</p>
                    <br />
                    <NavLink className={classes.button} to="/gettingStarted"> Get Started For Free </NavLink>
                </div>
                <br/> <br/>
                <img className={classes.logo} src={Logo} alt="Logo"/>
            </div>
        );
    }
}

export default Homepage