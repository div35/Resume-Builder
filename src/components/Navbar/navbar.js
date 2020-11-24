import React, {Component} from 'react';
import classes from './navbar.module.css';
import Logo from './Logo/logo';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends Component {
  render() {
    let links = null;
    if (this.props.userID != '') {
      links = (
        <ul className={classes.part2}>
          <NavLink to="/gettingStarted" className={classes.nav}>
            Resume Template
          </NavLink>
          <NavLink to="/about-us" className={classes.nav}>
            About Us
          </NavLink>
          <NavLink
            to="/logout"
            className={`${classes.nav} ${classes.register}`}
          >
            Logout
          </NavLink>
        </ul>
      );
    } else {
      links = (
        <ul className={classes.part2}>
          <NavLink to="/gettingStarted" className={classes.nav}>
            Resume Template
          </NavLink>
          <NavLink to="/about-us" className={classes.nav}>
            About Us
          </NavLink>
          <NavLink
            to="/register"
            className={`${classes.nav} ${classes.register}`}
          >
            Register
          </NavLink>
          <NavLink to="/signIn" className={`${classes.nav} ${classes.signin}`}>
            Sign In
          </NavLink>
        </ul>
      );
    }

    return (
      <div className={classes.navbar}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        {links}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userID: state.userID,
  };
};

export default connect(mapStateToProps, null)(Navbar);
