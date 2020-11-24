import React, {Component} from 'react';
import classes from './homepage.module.css';
import {NavLink} from 'react-router-dom';
import Logo from './../../Images/logo2.png';
import {connect} from "react-redux"

class Homepage extends Component {
  render() {
    let link = null;
    if (this.props.userID === '') {
      link = (
        <NavLink className={classes.button} to="/signIn">
          {' '}
          Get Started For Free{' '}
        </NavLink>
      );
    } else {
      link = (
        <NavLink className={classes.button} to="/gettingStarted">
          {' '}
          Get Started For Free{' '}
        </NavLink>
      );
    }
    return (
      <div>
        <div className={classes.home}>
          <h2>Create a resume that stands out</h2>
          <p>
            Create a Resume that perfectly describes your skills and match job
            profile.
          </p>
          <br />
          {link}
        </div>
        <br /> <br />
        <img className={classes.logo} src={Logo} alt="Logo" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userID: state.userID,
  };
};

export default connect(mapStateToProps, null)(Homepage);
