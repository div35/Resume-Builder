import React, { Component } from "react"
import Layout from "./components/UI/Layout/layout"
import Homepage from "./components/Homepage/homepage"
import PersonalDetails from "./components/PersonalDetails/personalDetails"
import EducationSection from "./components/EducationSection/educationSection"
import GettingStarted from "./components/GettingStarted/gettingStarted"
import {Route, Switch, withRouter} from "react-router-dom";
import PageNotFound from "./components/PageNotFound/pageNotFound"
import SignIn from "./components/SignIn/signInPage"
import Register from "./components/Register/register"

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
            <Route path="/" exact component={Homepage} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default withRouter(App);
