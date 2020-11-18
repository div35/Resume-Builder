import React, { Component } from "react";
import classes from "./trainingSection.module.css"
import Form from "./Form/form"

class Training extends Component {
    render() {
        return (
            <div className={classes.TrainingSection}>
                <Form />
                <div className={`${classes.Result} ${classes.Box}`}></div>
            </div>
        )
    }
}

export default Training