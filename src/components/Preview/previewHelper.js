import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './preview.module.css';

class PreviewHelper extends Component {
  render() {
    return (
      <div className={classes.previewHelper}>
        <div className={classes.top}>
          <div className={classes.left}>
            <h1 className={classes.name}>Divyaansh</h1>
          </div>
          <div className={classes.right}>
            <div className={classes.mob}>
              <p className={classes.heading1}>Mobile : </p>
              <p className={classes.para1}>(+91)8766319001</p>
            </div>
            <div className={classes.email}>
              <p className={classes.heading1}>Email : </p>
              <p className={classes.para1}>paprejadivyaansh@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.left}></div>
          <div className={classes.right}></div>
        </div>
      </div>
    );
  }
}

export default PreviewHelper;
