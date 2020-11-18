import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './preview.module.css';
import PreviewHelper from './previewHelper';

class Preview extends Component {
  render() {
    return (
      <div className={classes.Preview}>
        <PreviewHelper />
        <div className={`${classes.control} ${classes.Box}`}></div>
      </div>
    );
  }
}

export default Preview;
