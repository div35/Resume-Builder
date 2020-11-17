import React, { Component } from "react";
import classes from "./educationSection.module.css"
import Form from "./Form/form"

class EducationSection extends Component {
    render() {
        return (
            <div className={classes.EducationSection}>
                <Form />
                <div className={`${classes.Result} ${classes.Box}`}></div>
            </div>
        )
    }
}

export default EducationSection