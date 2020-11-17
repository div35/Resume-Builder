import React, { Component } from "react"
import Navbar from "./../../Navbar/navbar"
import classes from "./layout.module.css"

class Layout extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className={classes.main}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;