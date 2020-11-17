import React, { Component } from "react";
import classes from "./gettingStarted.module.css"

class GettingStarted extends Component {

    onClickHandler = (key, event) => {
        event.preventDefault();
        console.log(key);
        this.props.history.push("personalDetails");
    }

    render() {
        return (
            <div>
                <div className={classes.home}>
                    <h2>Select a resume template to get started</h2>
                    <p>You'll be able to edit and change this template later!</p>
                    <br />
                    <div className={classes.templates}>
                        <div className={`${classes.temp1} ${classes.temp}`}>
                            <br /><br /><br />
                            <button className={classes.btn} key="1" onClick={this.onClickHandler.bind(this, "1")}>Use Template</button>
                        </div>
                        <div className={`${classes.temp2} ${classes.temp}`}>
                            <br /><br /><br />
                            <button className={classes.btn} key="2" onClick={this.onClickHandler.bind(this, "2")}>Use Template</button>
                        </div>
                        <div className={`${classes.temp3} ${classes.temp}`}>
                            <br /><br /><br />
                            <button className={classes.btn} key="3" onClick={this.onClickHandler.bind(this, "3")}>Use Template</button>
                        </div>
                        <div className={`${classes.temp4} ${classes.temp}`}>
                            <br /><br /><br />
                            <button className={classes.btn} key="4" onClick={this.onClickHandler.bind(this, "4")}>Use Template</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GettingStarted;