import React, { Component } from "react";
import classes from "./workExperience.module.css"
import Form from "./Form/form"

class Work extends Component {
    render() {
        return (
            <div className={classes.WorkExperience}>
                <Form />
                <div className={`${classes.Result} ${classes.Box}`}></div>
            </div>
        )
    }
}

export default Work