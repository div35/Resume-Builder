import React, { Component } from "react";
import classes from "./gettingStarted.module.css"
import * as action from "./../../store/action/action"
import {connect} from "react-redux"

class GettingStarted extends Component {

    // onClickHandler = (key, event) => {
    //     event.preventDefault();
    //     console.log(key);
    //     this.props.history.push("personalDetails");
    // }

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
                            <button className={classes.btn} onClick = {() => this.props.selectTemplate(1)} >Use Template</button>
                        </div>
                        <div className={`${classes.temp2} ${classes.temp}`}>
                            <br /><br /><br />
                            <button className={classes.btn} onClick={() => this.props.selectTemplate(2)}>Use Template</button>
                        </div>
                        <div className={`${classes.temp3} ${classes.temp}`}>
                            <br /><br /><br />
                            <button className={classes.btn} onClick={() => this.props.selectTemplate(3)}>Use Template</button>
                        </div>
                        <div className={`${classes.temp4} ${classes.temp}`}>
                            <br /><br /><br />
                            <button className={classes.btn} onClick={() => this.props.selectTemplate(4)}>Use Template</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return({
        selectTemplate : (key) => dispatch(action.selectTemplate(key))
    })
}

export default connect(null, mapDispatchToProps)(GettingStarted);