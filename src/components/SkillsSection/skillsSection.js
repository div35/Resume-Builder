import React, { Component } from "react";
import classes from "./skillsSection.module.css"
// import Form from "./Form/form"

class Skills extends Component {
    render() {
        return (
            <div className={classes.SkillsSection}>
                {/* <Form /> */}
                <div className={`${classes.Result} ${classes.Box}`}></div>
            </div>
        )
    }
}

export default Skills;