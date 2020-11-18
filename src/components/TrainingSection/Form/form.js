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
    this.props.history.push('/skills');
  };

  backHandler = () => {
    this.props.history.push('/workExp');
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
            label="Institute Name"
            type="text"
            placeholder="Name of your Institute"
            value={this.props.instituteName}
            changed={this.changeInputHandler.bind('this', 'instituteName')}
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
          Training And Certification
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
    name: state.trainingSection.name,
    location: state.trainingSection.location,
    s_month: state.trainingSection.s_month,
    s_year: state.trainingSection.s_year,
    e_month: state.trainingSection.e_month,
    e_year: state.trainingSection.e_year,
    ongoing: state.trainingSection.ongoing,
    description: state.trainingSection.description,
    instituteName: state.trainingSection.instituteName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInfo: (value, identifier) =>
      dispatch(actions.changeTrainingInfo(value, identifier)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
