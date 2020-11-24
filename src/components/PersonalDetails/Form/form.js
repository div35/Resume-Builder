import React, { Component } from "react";
import classes from "./form.module.css"
import Input from "../../UI/Input/input"
import Button from "../../UI/Button/button"
import { withRouter } from "react-router-dom"
import {connect} from "react-redux"
import * as actions from "./../../../store/action/action"

class Form extends Component {
    changeInputHandler = (id, event) => {
        this.props.changeInfo(event.target.value, id)
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        this.props.history.push('/educationSection');
    }

    backHandler = () => {
        this.props.history.push('/gettingStarted');
    }

    

    render() {
       
        return (
            <div className={`${classes.Box}`}>
                <h2 style={{ marginTop: "0rem", textAlign: "center", fontSize: "1.8rem" }}>Personal Details</h2>
                <form onSubmit={this.formSubmitHandler}>
                    <div className={classes.Together}>
                        <Input elementType="input" label="First Name" type="text" placeholder="Your First Name" required="true" value={this.props.firstName} changed={this.changeInputHandler.bind("this", "firstName")}></Input>
                        <Input elementType="input" label="Last Name" type="text" placeholder="Your Last Name" required="true" value={this.props.lastName} changed={this.changeInputHandler.bind("this", "lastName")}></Input>
                    </div>
                    <Input elementType="input" label="Professional Summary" type="text" placeholder="Your Professional Summary" value={this.props.profSummary} changed={this.changeInputHandler.bind("this", "profSummary")}></Input>
                    <div className={classes.Together}>
                        <Input elementType="input" label="Email Id" type="email" placeholder="Your Email Id" required="true" value={this.props.email} changed={this.changeInputHandler.bind("this", "email")}></Input>
                        <Input elementType="input" label="Phone Number" type="text" placeholder="Your Phone Number" required="true" value={this.props.phone} changed={this.changeInputHandler.bind("this", "phone")}></Input>
                    </div>
                    <div className={classes.Together}>
                        <Input elementType="input" label="Profession" type="text" placeholder="Your Profession" value={this.props.profession} changed={this.changeInputHandler.bind("this", "profession")}></Input>
                        <Input elementType="input" label="Address" type="text" placeholder="Your Address" required="true" value={this.props.address} changed={this.changeInputHandler.bind("this", "address")}></Input>
                    </div>
                    <div className={classes.Together}>
                        <Input elementType="input" label="City" type="text" placeholder="Your City" required="true" value={this.props.city} changed={this.changeInputHandler.bind("this", "city")}></Input>
                        <Input elementType="input" label="State" type="text" placeholder="Your State" required="true" value={this.props.state} changed={this.changeInputHandler.bind("this", "state")}></Input>
                    </div>
                    <div className={classes.Together}>
                        <Input elementType="input" label="Country" type="text" placeholder="Your Country" required="true" value={this.props.country} changed={this.changeInputHandler.bind("this", "country")}></Input>
                        <Input elementType="input" label="Pin Code" type="text" placeholder="Your Pin Code" required="true" value={this.props.pinCode} changed={this.changeInputHandler.bind("this", "pinCode")}></Input>
                    </div>
                    <br />
                    <Button btnType="Success" type="submit">Next</Button>
                    <br />
                </form>
                <Button btnType="Danger" clicked={this.backHandler}>Back</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
        firstName: state.personalDetails.firstName,
        lastName: state.personalDetails.lastName,
        profSummary: state.personalDetails.profSummary,
        email: state.personalDetails.email,
        phone: state.personalDetails.phone,
        profession: state.personalDetails.profession,
        address: state.personalDetails.address,
        city: state.personalDetails.city,
        state: state.personalDetails.state,
        country: state.personalDetails.country,
        pinCode: state.personalDetails.pinCode,
        v: state.personalDetails.v
    })
}

const mapDispatchToProps = dispatch => {
    return({
        changeInfo : (value, identifier) => dispatch(actions.changePersonalInfo(value, identifier)),
    })
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Form));