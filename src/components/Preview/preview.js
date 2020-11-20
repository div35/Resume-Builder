import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './preview.module.css';
import Temp3 from './temp3/temp3';

class Preview extends Component {
  render() {
    return (
      <div className={classes.Preview}>
        <Temp3 />
        <div className={`${classes.control} ${classes.Box}`}></div>
      </div>
    );
  }
}

export default Preview;
