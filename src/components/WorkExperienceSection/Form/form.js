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
      name: this.props.name,
      location: this.props.location,
      s_month: this.props.s_month,
      s_year: this.props.s_year,
      e_month: this.props.e_month,
      e_year: this.props.e_year,
      ongoing: this.props.ongoing,
      description: this.props.description,
      position: this.props.position,
    }
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
    this.props.history.push('/educationSection');
  };

  checkboxHandler = (e) => {
    if (e.target.checked === false) {
      this.props.changeInfo('Done', 'ongoing');
    } else {
      this.props.changeInfo('Present', 'ongoing');
    }
  };

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
            label="Company Name"
            type="text"
            placeholder="Project Name"
            required="true"
            value={this.props.name}
            changed={this.changeInputHandler.bind('this', 'name')}
          />
          <Input
            elementType="input"
            type="checkbox"
            label="Ongoing"
            changed={this.checkboxHandler}
            checked={this.props.ongoing === 'Done' ? false : true}
          />
        </div>

        <div className={classes.Together}>
          <Input
            elementType="input"
            label="Position"
            type="text"
            placeholder="Your Position"
            value={this.props.position}
            changed={this.changeInputHandler.bind('this', 'position')}
          />

          <Input
            elementType="input"
            label="Location"
            type="text"
            placeholder="Location"
            value={this.props.location}
            changed={this.changeInputHandler.bind('this', 'location')}
          />
        </div>

        <div className={classes.Together}>
          <Input
            elementType="input"
            label="Starting Month"
            type="text"
            placeholder="Starting Month"
            required="true"
            value={this.props.s_month}
            changed={this.changeInputHandler.bind('this', 's_month')}
          />
          <Input
            elementType="input"
            label="Starting Year"
            type="text"
            placeholder="Starting Year"
            required="true"
            value={this.props.s_year}
            changed={this.changeInputHandler.bind('this', 's_year')}
          />
        </div>

        {temp}

        <Input
          elementType="input"
          label="Description"
          type="text"
          placeholder="Describe Your Role"
          value={this.props.description}
          changed={this.changeInputHandler.bind('this', 'description')}
        />

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
          Work Experience
        </h2>
        <Button btnType="Success" clicked={this.addEducationHandler}>
          <i className="fa fa-plus-circle" />
        </Button>
        <Button btnType="Danger" clicked={this.addEducationHandler}>
          <i className="fa fa-minus-circle" />
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
    name: state.workSection.name,
    location: state.workSection.location,
    s_month: state.workSection.s_month,
    s_year: state.workSection.s_year,
    e_month: state.workSection.e_month,
    e_year: state.workSection.e_year,
    ongoing: state.workSection.ongoing,
    description: state.workSection.description,
    position: state.workSection.position,
    id: state.workSection.id,
    userID: state.userID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInfo: (value, identifier) =>
      dispatch(actions.changeWorkInfo(value, identifier)),
      ADD_INFO: (data, history, userID) =>
      dispatch(actions.WorkInfo_ADD(data, history, userID)),
    UPDATE_INFO: (data, history, id, userID) =>
      dispatch(actions.WorkInfo_UPDATE(data, history, id, userID)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
