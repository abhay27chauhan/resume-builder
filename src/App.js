import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import "./App.css";
import AboutUs from "./component/AboutUs/AboutUs";
import Contact from "./component/Contact/Contact";
import Education from "./component/Education/Education";
import Finalize from "./component/Finalize/Finalize";
import Footer from "./component/Footer/Footer";
import GettingStarted from "./component/GettingStarted/GettingStarted";
import Header from "./component/Header/Header";
import LandingPage from "./component/LandingPage/LandingPage";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";

function App() {
  return (
    <div className="app">
      <Header></Header>

      <Switch>
        <PrivateRoute path="/education" comp={Education} />
        <PrivateRoute path="/getting-started" comp={GettingStarted} />
        <PrivateRoute path="/resume-templates" comp={GettingStarted} />
        <PrivateRoute path="/finalize" comp={Finalize} />
        <PrivateRoute path="/contact" comp={Contact} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={LandingPage} />
      </Switch>

      <Footer></Footer>
    </div>
  );
}

const PrivateRoute = (props) => {
  console.log("App ", props);
  // map state to props
  const Component = props.comp;
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <Route
      {...props}
      render={(props) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default App;
