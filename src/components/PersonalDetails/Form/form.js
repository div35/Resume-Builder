import React, { Component } from "react";
import classes from "./form.module.css"
import Input from "../../UI/Input/input"
import Button from "../../UI/Button/button"
import { withRouter } from "react-router-dom"

class Form extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: {
                firstName: "",
                lastName: "",
                profSummary: "",
                email: "",
                phone: "",
                profession: "",
                address: "",
                city: "",
                state: "",
                country: "",
                pinCode: ""
            }
        }
    }


    changeInputHandler = (id, event) => {
        let updatedData = {
            ...this.state.data,
        }
        updatedData[id] = event.target.value;
        this.setState({
            ...this.state,
            data: updatedData
        })
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.data);
        this.props.history.push('/educationSection');
    }

    render() {
        return (
            <div className={`${classes.Box}`}>
                <h2 style={{ marginTop: "0rem", textAlign: "center", fontSize: "1.8rem" }}>Personal Details</h2>
                <form onSubmit={this.formSubmitHandler}>
                    <div className={classes.Together}>
                        <Input elementType="input" label="First Name" type="text" placeholder="Your First Name" required="true" value={this.state.data.firstName} changed={this.changeInputHandler.bind("this", "firstName")}></Input>
                        <Input elementType="input" label="Last Name" type="text" placeholder="Your Last Name" required="true" value={this.state.data.lastName} changed={this.changeInputHandler.bind("this", "lastName")}></Input>
                    </div>
                    <Input elementType="input" label="Professional Summary" type="text" placeholder="Your Professional Summary" value={this.state.data.profSummary} changed={this.changeInputHandler.bind("this", "profSummary")}></Input>
                    <div className={classes.Together}>
                        <Input elementType="input" label="Email Id" type="email" placeholder="Your Email Id" required="true" value={this.state.data.email} changed={this.changeInputHandler.bind("this", "email")}></Input>
                        <Input elementType="input" label="Phone Number" type="text" placeholder="Your Phone Number" required="true" value={this.state.data.phone} changed={this.changeInputHandler.bind("this", "phone")}></Input>
                    </div>
                    <div className={classes.Together}>
                        <Input elementType="input" label="Profession" type="text" placeholder="Your Profession" required="true" value={this.state.data.profession} changed={this.changeInputHandler.bind("this", "profession")}></Input>
                        <Input elementType="input" label="Address" type="text" placeholder="Your Address" required="true" value={this.state.data.address} changed={this.changeInputHandler.bind("this", "address")}></Input>
                    </div>
                    <div className={classes.Together}>
                        <Input elementType="input" label="City" type="text" placeholder="Your City" required="true" value={this.state.data.city} changed={this.changeInputHandler.bind("this", "city")}></Input>
                        <Input elementType="input" label="State" type="text" placeholder="Your State" required="true" value={this.state.data.state} changed={this.changeInputHandler.bind("this", "state")}></Input>
                    </div>
                    <div className={classes.Together}>
                        <Input elementType="input" label="Country" type="text" placeholder="Your Country" required="true" value={this.state.data.country} changed={this.changeInputHandler.bind("this", "country")}></Input>
                        <Input elementType="input" label="Pin Code" type="text" placeholder="Your Pin Code" required="true" value={this.state.data.pinCode} changed={this.changeInputHandler.bind("this", "pinCode")}></Input>
                    </div>
                    <br />
                    <Button btnType="Success" type="submit">Next</Button>
                    <br />
                </form>
                <Button btnType="Danger">Back</Button>
            </div>
        )
    }
}

export default withRouter(Form);