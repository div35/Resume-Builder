import React, {Component} from 'react';
import classes from './personalDetails.module.css';
import Form from './Form/form';

class PersonalDetails extends Component {
  render() {
    return (
      <div className={classes.PersonalDetails}>
        <Form />
        <div className={`${classes.Result} ${classes.Box}`}>
        </div>
      </div>
    );
  }
}

export default PersonalDetails;
