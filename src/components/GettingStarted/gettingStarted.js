import React, {Component} from 'react';
import classes from './gettingStarted.module.css';
import * as action from './../../store/action/action';
import {connect} from 'react-redux';

class GettingStarted extends Component {
  onClickHandler = (key) => {
    if (this.props.ID !== '') {
      this.props.proceedToPersonalDetails_UPDATE(key, this.props.history, this.props.ID);
    } else {
      this.props.proceedToPersonalDetails_ADD(key, this.props.history);
    }
  };

  render() {
    return (
      <div>
        <div className={classes.home}>
          <h2>Select a resume template to get started</h2>
          <p>You'll be able to edit and change this template later!</p>
          <br />
          <div className={classes.templates}>
            <div className={`${classes.temp1} ${classes.temp}`}>
              <br />
              <br />
              <br />
              <button
                className={classes.btn}
                onClick={() => this.onClickHandler(1)}
              >
                Use Template
              </button>
            </div>
            <div className={`${classes.temp2} ${classes.temp}`}>
              <br />
              <br />
              <br />
              <button
                className={classes.btn}
                onClick={() => this.onClickHandler(2)}
              >
                Use Template
              </button>
            </div>
            <div className={`${classes.temp3} ${classes.temp}`}>
              <br />
              <br />
              <br />
              <button
                className={classes.btn}
                onClick={() => this.onClickHandler(3)}
                disabled
              >
                Use Template
              </button>
            </div>
            <div className={`${classes.temp4} ${classes.temp}`}>
              <br />
              <br />
              <br />
              <button
                className={classes.btn}
                onClick={() => this.onClickHandler(4)}
                disabled
              >
                Use Template
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ID: state.ID
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    proceedToPersonalDetails_ADD: (key, history) =>
      dispatch(action.proceedToPersonalDetails_ADD(key, history)),
      proceedToPersonalDetails_UPDATE: (key, history, ID) =>
      dispatch(action.proceedToPersonalDetails_UPDATE(key, history, ID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GettingStarted);
