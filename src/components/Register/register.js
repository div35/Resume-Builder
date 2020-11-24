import React, { Component } from "react"
import classes from "./register.module.css"
import Input from "./../UI/Input/input"
import Button from "./../UI/Button/button"
import {connect} from "react-redux"
import * as action from "./../../store/action/action"

class Register extends Component {
    state = {
            email:"",
            password:"",
            conf_password:""
    }

    changeInputHandler = (id, event) => {
        let updatedData = {
            ...this.state
        }
        updatedData[id] = event.target.value;
        this.setState(updatedData);
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        if(this.state.password === this.state.conf_password){
            this.props.registerFunc(this.state.email, this.state.password);
        }
        else{
            alert("PLEASE ENTER CORRECT PASSWORD !!! YOUR PASSWORDS DOESN'T MATCH")
        }
    }

    toggle = (e) => {
        e.preventDefault();
        this.props.history.push('/signIn');
    }

    render() {
        let errMsg = null;
        if(this.props.error){
            errMsg = <div style={{color: "red", textAlign: "center"}}>ERROR <br/> {this.props.error}</div>
        }
        return (
            <div>
                <div className={`${classes.Box}`}>
                    <h2 style={{ marginTop: "0rem", textAlign: "center", fontSize: "1.8rem" }}>Register</h2>
                    <br/>
                    {errMsg}
                    <form onSubmit={this.formSubmitHandler}>
                        <Input elementType="input" label="Email" type="text" placeholder="Your Email" required="true" value={this.state.email} changed={this.changeInputHandler.bind("this", "email")}></Input>
                        <Input elementType="input" label="Password" type="password" placeholder="Your Password" required="true" value={this.state.password} changed={this.changeInputHandler.bind("this", "password")}></Input>
                        <Input elementType="input" label="Confirm Password" type="password" placeholder="Confirm Your Password" required="true" value={this.state.conf_password} changed={this.changeInputHandler.bind("this", "conf_password")}></Input>
                        <br />
                        <Button btnType="Success" type="submit">Register</Button>
                        <br />
                    </form>
                Want To Sign In ! <Button btnType="Danger" clicked={this.toggle}>Sign In</Button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
        error: state.Autherror
    })
}

const mapDispatchToProps = dispatch => {
    return({
        registerFunc : (email, password) => dispatch (action.register(email, password, true))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);