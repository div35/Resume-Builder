import React, { Component } from "react"
import classes from "./signInPage.module.css"
import Input from "./../UI/Input/input"
import Button from "./../UI/Button/button"

class SignIn extends Component {
    state = {
            email:"",
            password:""
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
        console.log(this.state);
        this.props.history.push('/');
    }

    toggle = (e) => {
        e.preventDefault();
        this.props.history.push('/register');
    }
    
    render() {
        return (
            <div>
                <div className={`${classes.Box}`}>
                    <h2 style={{ marginTop: "0rem", textAlign: "center", fontSize: "1.8rem" }}>Sign In</h2>
                    <br/>
                    <form onSubmit={this.formSubmitHandler}>
                        <Input elementType="input" label="Email" type="text" placeholder="Your Email" required="true" value={this.state.email} changed={this.changeInputHandler.bind("this", "email")}></Input>
                        <Input elementType="input" label="Password" type="password" placeholder="Your Password" required="true" value={this.state.password} changed={this.changeInputHandler.bind("this", "password")}></Input>
                        <br />
                        <Button btnType="Success" type="submit">Sign In</Button>
                        <br />
                    </form>
                New To This Website ! <Button btnType="Danger" clicked={this.toggle}>Register</Button>
                </div>

            </div>
        )
    }
}

export default SignIn;