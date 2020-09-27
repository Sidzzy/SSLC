import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import InstructorCourses from './containers/InstructorCourses';
import EditCourse from './containers/EditCourse';
import EditChapter from './containers/EditChapter';
import StudentCourses from './containers/StudentCourses';
import ViewChapter from './containers/ViewChapter';
import StudentEditProfile from './containers/StudentEditProfile';
import InstructorEditProfile from './containers/InstructorEditProfile';

const isUserLoggedIn = (ans) => {
    return ans;
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (isUserLoggedIn(true)) {
          return <Component {...props} />;
        } else {
          return (
            <Switch>
              <Route
                path="/home"
                exact
                component={Home}
              />
              <Redirect
                to={{
                  //TODO: Make it login in the future
                  pathname: "/home",      
                  state: { from: window.location.href }
                }}
              />
            </Switch>
          );
        }
      }}
    />
  );
}

const App = () => (
    <Router>
      <Switch>
        <PrivateRoute
          path="/home"
          exact
          component={Home}
        />
        <PrivateRoute
          path="/mycourses"
          component={InstructorCourses}
        />
        <PrivateRoute
          path="/editcourse"
          component={EditCourse}
        />
        <PrivateRoute
          path="/editchapter"
          component={EditChapter}
        />
        <PrivateRoute
          path="/"
          exact
          component={Home}
        />
        <PrivateRoute
          path="/studentcourses"
          component={StudentCourses}
        />
        <PrivateRoute
          path="/viewchapters"
          component={ViewChapter}
        />
        <PrivateRoute
          path="/studenteditprofile"
          component={StudentEditProfile}
        />
        <PrivateRoute
          path="/instructoreditprofile"
          component={InstructorEditProfile}
        />
        <PrivateRoute
          //TODO: Create a nonExisting page for the all the incoming non existing route.
          path=":nonExisting"
          exact
          component={Home}
        />
      </Switch>
    </Router>
)

export default App;
