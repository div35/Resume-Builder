import React, {Component} from 'react';
import classes from './form.module.css';
import Input from '../../UI/Input/input';
import Button from '../../UI/Button/button';
import {withRouter} from 'react-router-dom';
import * as actions from './../../../store/action/action';
import {connect} from 'react-redux';

class Form extends Component {
  changeInputHandler = (id, event) => {
    this.props.changeInfo(event.target.value, id);
  };

  formSubmitHandler = (e) => {
    e.preventDefault();
    let data = {
      college: this.props.college,
      degree: this.props.degree,
      cgpa: this.props.cgpa,
      collegeCity: this.props.collegeCity,
      s_month: this.props.s_month,
      s_year: this.props.s_year,
      e_month: this.props.e_month,
      e_year: this.props.e_year,
      ongoing: this.props.ongoing,
    };

    if (this.props.id === '') {
      this.props.ADD_INFO(data, this.props.history, this.props.userID);
    } else {
      this.props.UPDATE_INFO(
        data,
        this.props.history,
        this.props.id,
        this.props.userID
      );
    }
  };

  backHandler = () => {
    this.props.history.push('/personalDetails');
  };

  checkboxHandler = (e) => {
    if (e.target.checked === false) {
      this.props.changeInfo('Done', 'ongoing');
    } else {
      this.props.changeInfo('Present', 'ongoing');
    }
  };

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
    let temp = null;
    if (this.props.ongoing === 'Done') {
      temp = (
        <div className={classes.Together}>
          <Input
            elementType="input"
            label="Ending Month"
            type="text"
            placeholder="Ending Month"
            required="true"
            value={this.props.e_month}
            changed={this.changeInputHandler.bind('this', 'e_month')}
          />
          <Input
            elementType="input"
            label="Ending Year"
            type="text"
            placeholder="Ending Year"
            required="true"
            value={this.props.e_year}
            changed={this.changeInputHandler.bind('this', 'e_year')}
          />
        </div>
      );
    } else {
      temp = null;
    }
    let form = (
      <form onSubmit={this.formSubmitHandler}>
        <div className={classes.Together}>
          <Input
            elementType="input"
            label="Institute Name"
            type="text"
            placeholder="Your Institute Name"
            required="true"
            value={this.props.college}
            changed={this.changeInputHandler.bind('this', 'college')}
          ></Input>
          <Input
            elementType="input"
            label="Degree"
            type="text"
            placeholder="Your Degree"
            required="true"
            value={this.props.degree}
            changed={this.changeInputHandler.bind('this', 'degree')}
          ></Input>
        </div>
        <div className={classes.Together}>
          <Input
            elementType="input"
            label="CGPA"
            type="text"
            placeholder="Your CGPA"
            required="true"
            value={this.props.cgpa}
            changed={this.changeInputHandler.bind('this', 'cgpa')}
          ></Input>
          <Input
            elementType="input"
            label="City/State"
            type="text"
            placeholder="City/State"
            required="true"
            value={this.props.collegeCity}
            changed={this.changeInputHandler.bind('this', 'collegeCity')}
          ></Input>
        </div>
        <Input
          elementType="input"
          type="checkbox"
          label="Ongoing"
          changed={this.checkboxHandler}
          checked={this.props.ongoing === 'Done' ? false : true}
        />
        <div className={classes.Together}>
          <Input
            elementType="input"
            label="Starting Month"
            type="text"
            placeholder="Starting Month"
            required="true"
            value={this.props.s_month}
            changed={this.changeInputHandler.bind('this', 's_month')}
          ></Input>
          <Input
            elementType="input"
            label="Starting Year"
            type="text"
            placeholder="Starting Year"
            required="true"
            value={this.props.s_year}
            changed={this.changeInputHandler.bind('this', 's_year')}
          ></Input>
        </div>
        {temp}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button btnType="Success" type="submit">
          Next
        </Button>
        <br />
      </form>
    );

    return (
      <div className={`${classes.Box}`}>
        <h2
          style={{
            marginTop: '0rem',
            textAlign: 'center',
            fontSize: '1.8rem',
            marginBottom: '0rem',
          }}
        >
          Education Section
        </h2>
        <Button btnType="Success" clicked={this.addEducationHandler}>
          <i className="fa fa-plus-circle"></i>
        </Button>
        <Button btnType="Danger" clicked={this.addEducationHandler}>
          <i className="fa fa-minus-circle"></i>
        </Button>
        {form}
        <Button btnType="Danger" clicked={this.backHandler}>
          Back
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    college: state.educationDetails.college,
    degree: state.educationDetails.degree,
    cgpa: state.educationDetails.cgpa,
    collegeCity: state.educationDetails.collegeCity,
    s_month: state.educationDetails.s_month,
    s_year: state.educationDetails.s_year,
    e_month: state.educationDetails.e_month,
    e_year: state.educationDetails.e_year,
    ongoing: state.educationDetails.ongoing,
    id: state.educationDetails.id,
    userID: state.userID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInfo: (value, identifier) =>
      dispatch(actions.changeEducationInfo(value, identifier)),
    ADD_INFO: (data, history, userID) =>
      dispatch(actions.EducationInfo_ADD(data, history, userID)),
    UPDATE_INFO: (data, history, id, userID) =>
      dispatch(actions.EducationInfo_UPDATE(data, history, id, userID)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
