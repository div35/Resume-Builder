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
    this.props.history.push('/workExp');
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
          label="Project Name"
          type="text"
          placeholder="Project Name"
          required="true"
          value={this.props.name}
          changed={this.changeInputHandler.bind('this', 'name')}
        />
        <Input
          elementType="input"
          type="checkbox"
          label="Project is ongoing"
          changed={this.checkboxHandler}
          checked={this.props.ongoing === 'Done' ? false : true}
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
          label="Project Description"
          type="text"
          placeholder="Describe Your Project"
          value={this.props.description}
          changed={this.changeInputHandler.bind('this', 'description')}
        />

        <Input
          elementType="input"
          label="Project Link"
          type="text"
          placeholder="Project Link"
          value={this.props.link}
          changed={this.changeInputHandler.bind('this', 'link')}
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
          Project Description
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
    name: state.projectSection.name,
    s_month: state.projectSection.s_month,
    s_year: state.projectSection.s_year,
    e_month: state.projectSection.e_month,
    e_year: state.projectSection.e_year,
    ongoing: state.projectSection.ongoing,
    description: state.projectSection.description,
    link: state.projectSection.link,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInfo: (value, identifier) =>
      dispatch(actions.changeProjectInfo(value, identifier)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
