import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './temp3.module.css';

class PreviewHelper extends Component {
  render() {
    return (
      <div className={classes.temp3}>
        <div className={classes.top}>
          <div className={classes.left}>
            <h1 className={classes.name}>DIVYAANSH</h1>
            <div className={classes.mob}>
              <p className={classes.heading1}>Mobile : </p>
              <p className={classes.para1}>(+91)8766319001</p>
            </div>
            <div className={classes.email}>
              <p className={classes.heading1}>Email : </p>
              <p className={classes.para1}>paprejadivyaansh@gmail.com</p>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.link}>
              <div className={classes.heading1}>LinkedIn profile: </div>
              <div className={classes.para1}>
                https://www.linkedin.com/in/divyaansh-papreja-99a115152/
              </div>
            </div>
            <br/>
            <div className={classes.link}>
              <div className={classes.heading1}>Github profile: </div>
              <div className={classes.para1}> https://github.com/div35</div>
            </div>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.left}>
            <div className={classes.education}></div>
            <div className={classes.workExp}></div>
            <div className={classes.project}></div>
            <div className={classes.trainings}></div>
            <div className={classes.skills}></div>
          </div>
          <div className={classes.right}></div>
        </div>
      </div>
    );
  }
}

export default PreviewHelper;
