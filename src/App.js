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

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/signIn" component={SignIn} />
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
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
