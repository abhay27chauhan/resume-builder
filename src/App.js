import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs/AboutUs';
import Contact from './component/Contact/Contact';
import Education from './component/Education/Education';
import Finalize from './component/Finalize/Finalize';
import Footer from './component/Footer/Footer';
import GettingStarted from './component/GettingStarted/GettingStarted';
import Header from './component/Header/Header';
import LandingPage from './component/LandingPage/LandingPage';
import Login from './component/Login/Login';
import Register from './component/Register/Register';

function App() {
  return (
    <div className="app">
      <Header></Header>

      <Switch>
        <Route path="/education" component={Education} />
        <Route path="/contact" component={Contact} />
        <Route path="/getting-started" component={GettingStarted} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/finalize" component={Finalize} />
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/" component={LandingPage} />
      </Switch>

      <Footer></Footer>
    </div>
  );
}

export default App;
