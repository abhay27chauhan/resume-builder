import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../static/images/resume.png";

import './LandingPage.scss'

function LandingPage() {
    return (
      <div className="landingPage-container">
        <div className="section">
          <h1>Create a resume that stands out</h1>
          <p>
            Create a Resume that perfectally describes your skils and match job
            profile.
          </p>
          <br></br>
          <div>
            <Link to="/getting-started">
              <button className="btn hvr-float-shadow">
                Get Started for Free
              </button>
            </Link>
          </div>
          <img src={logo} className="lp-image" alt="logo" />
        </div>
      </div>
    );
}

export default LandingPage;
