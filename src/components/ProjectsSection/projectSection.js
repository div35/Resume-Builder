import React, { Component } from "react";
import classes from "./projectSection.module.css"
import Form from "./Form/form"

class Projects extends Component {
    render() {
        return (
            <div className={classes.ProjectSection}>
                <Form />
                <div className={`${classes.Result} ${classes.Box}`}></div>
            </div>
        )
    }
}

export default Projects