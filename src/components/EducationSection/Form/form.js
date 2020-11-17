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
                college:"",
                degree:"",
                cgpa:"",
                city:"",
                month:"",
                year:""
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
        this.props.history.push('/');
    }

    render() {
        return (
            <div className={`${classes.Box}`}>
                <h2 style={{ marginTop: "0rem", textAlign: "center", fontSize: "1.8rem" }}>Education Section</h2>
                <form onSubmit={this.formSubmitHandler}>
                    <div className={classes.Together}>
                        <Input elementType="input" label="College Name" type="text" placeholder="Your College Name" required="true" value={this.state.data.college} changed={this.changeInputHandler.bind("this", "college")}></Input>
                        <Input elementType="input" label="Degree" type="text" placeholder="Your Degree" required="true" value={this.state.data.degree} changed={this.changeInputHandler.bind("this", "degree")}></Input>
                    </div>
                    <div className={classes.Together}>
                        <Input elementType="input" label="CGPA" type="text" placeholder="Your CGPA" required="true" value={this.state.data.cgpa} changed={this.changeInputHandler.bind("this", "cgpa")}></Input>
                        <Input elementType="input" label="City/State" type="text" placeholder="Your City/State" required="true" value={this.state.data.city} changed={this.changeInputHandler.bind("this", "city")}></Input>
                    </div>
                    <div className={classes.Together}>
                        <Input elementType="input" label="Graduation Month" type="text" placeholder="Your Graduation Month" required="true" value={this.state.data.month} changed={this.changeInputHandler.bind("this", "month")}></Input>
                        <Input elementType="input" label="Graduation Year" type="text" placeholder="Your Graduation Year" required="true" value={this.state.data.year} changed={this.changeInputHandler.bind("this", "year")}></Input>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <Button btnType="Success" type="submit">Next</Button>
                    <br />
                </form>
                <Button btnType="Danger">Back</Button>
            </div>
        )
    }
}

export default withRouter(Form);