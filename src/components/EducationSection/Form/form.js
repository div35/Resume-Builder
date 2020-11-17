import React, { Component } from "react";
import classes from "./form.module.css"
import Input from "../../UI/Input/input"
import Button from "../../UI/Button/button"
import { withRouter } from "react-router-dom"
import * as actions from "./../../../store/action/action"
import { connect } from "react-redux"

class Form extends Component {
    // state = {
    //     feilds: 1
    // }

    changeInputHandler = (id, event) => {
        this.props.changeInfo(event.target.value, id)
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }

    backHandler = () => {
        this.props.history.push('/personalDetails');
    }

    // addEducationHandler = () => {
    //     let updatedFeilds = this.state.feilds + 1;
    //     this.setState({
    //         ...this.state,
    //         feilds: updatedFeilds
    //     })
    // }

    // removeEducationHandler = () => {
    //     if (this.state.feilds >= 2) {
    //         let updatedFeilds = this.state.feilds - 1;
    //         this.setState({
    //             ...this.state,
    //             feilds: updatedFeilds
    //         })
    //     }
    // }

    render() {

        let form = (<form onSubmit={this.formSubmitHandler}>
            <div className={classes.Together}>
                <Input elementType="input" label="Institute Name" type="text" placeholder="Your Institute Name" required="true" value={this.props.college} changed={this.changeInputHandler.bind("this", "college")}></Input>
                <Input elementType="input" label="Degree" type="text" placeholder="Your Degree" required="true" value={this.props.degree} changed={this.changeInputHandler.bind("this", "degree")}></Input>
            </div>
            <div className={classes.Together}>
                <Input elementType="input" label="CGPA" type="text" placeholder="Your CGPA" required="true" value={this.props.cgpa} changed={this.changeInputHandler.bind("this", "cgpa")}></Input>
                <Input elementType="input" label="City/State" type="text" placeholder="City/State" required="true" value={this.props.collegeCity} changed={this.changeInputHandler.bind("this", "collegeCity")}></Input>
            </div>
            <div className={classes.Together}>
                <Input elementType="input" label="Starting Month" type="text" placeholder="Starting Month" required="true" value={this.props.month} changed={this.changeInputHandler.bind("this", "month")}></Input>
                <Input elementType="input" label="Starting Year" type="text" placeholder="Starting Year" required="true" value={this.props.year} changed={this.changeInputHandler.bind("this", "year")}></Input>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <Button btnType="Success" type="submit">Next</Button>
            <br />
        </form>)

        return (
            <div className={`${classes.Box}`}>
                <h2 style={{ marginTop: "0rem", textAlign: "center", fontSize: "1.8rem", marginBottom: "0rem" }}>Education Section</h2>
                <Button btnType="Success" clicked={this.addEducationHandler}><i className="fa fa-plus-circle"></i></Button>
                <Button btnType="Danger" clicked={this.addEducationHandler}><i className="fa fa-minus-circle"></i></Button>
                { form}
                <Button btnType="Danger" clicked={this.backHandler}>Back</Button>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return ({
        college: state.educationDetails.college,
        degree: state.educationDetails.degree,
        cgpa: state.educationDetails.cgpa,
        collegeCity: state.educationDetails.collegeCity,
        month: state.educationDetails.month,
        year: state.educationDetails.year
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        changeInfo: (value, identifier) => dispatch(actions.changeEducationInfo(value, identifier))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));