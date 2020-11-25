import React, {Component} from 'react';
import Layout from './components/UI/Layout/layout';
import Homepage from './components/Homepage/homepage';
import PersonalDetails from './components/PersonalDetails/personalDetails';
import EducationSection from './components/EducationSection/educationSection';
import GettingStarted from './components/GettingStarted/gettingStarted';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import PageNotFound from './components/PageNotFound/pageNotFound';
import SignIn from './components/SignIn/signInPage';
import Register from './components/Register/register';
import Work from './components/WorkExperienceSection/workExperience';
import Training from './components/TrainingSection/trainingSection';
import Skills from './components/SkillsSection/skillsSection';
import Projects from './components/ProjectsSection/projectSection';
import Preview from './components/Preview/preview';
import * as action from './store/action/action';
import {connect} from 'react-redux';
import Logout from "./components/Logout/logout"

class App extends Component {
  componentDidMount() {
    // console.log("HI");
    this.props.chackAuthStatus();
  }
  render() {
    let links = null;
    if (this.props.userID === '') {
      links = (
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/gettingStarted" component={GettingStarted} />
          <Route path="/" exact component={Homepage} />
          <Redirect to="/" />
        </Switch>
      );
    } else {
      links = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/gettingStarted" component={GettingStarted} />
          <Route path="/personalDetails" component={PersonalDetails} />
          <Route path="/educationSection" component={EducationSection} />
          <Route path="/workExp" component={Work} />
          <Route path="/projects" component={Projects} />
          <Route path="/trainings" component={Training} />
          <Route path="/skills" component={Skills} />
          <Route path="/preview" component={Preview} />
          <Route path="/" exact component={Homepage} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>{links}</Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userID: state.userID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chackAuthStatus: () => dispatch(action.checkAuthStatus()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
