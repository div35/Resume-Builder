import React, { Component } from "react"
import classes from "./navbar.module.css"
import Logo from "./Logo/logo"
import { NavLink } from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <div className={classes.navbar}>
                <Logo />
                <ul className={classes.part2}>
                    <NavLink to="/" className={classes.nav}>Resume Template</NavLink>
                    <NavLink to="/about-us" className={classes.nav}>About Us</NavLink>
                    <NavLink to="/register" className={`${classes.nav} ${classes.register}`}>Register</NavLink>
                    <NavLink to="/signIn" className={`${classes.nav} ${classes.signin}`}>Sign In</NavLink>
                </ul>
            </div>
        )
    }
}

export default Navbar