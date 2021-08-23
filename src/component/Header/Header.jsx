import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    const [user, setUser] = useState(false);

    const handleSignOut = () => {

    }

    return (
        <div className="header">
            <div className="logo_container">
                <h3>RESUME BUILDER</h3>
            </div>
            <div className="header-links">
                <div className="header-link static-link">
                    <Link to='/resume-templates'>
                        <p>Resume Template</p>
                    </Link>
                    <Link to='/about-us'>
                        <p>About Us</p>
                    </Link>
                </div>
                {
                    user ? 
                    (
                        <div className="header-link">
                            <p>Logged in as Abhay Chauhan</p>
                            <button className="signout" onClick={handleSignOut}>Signout </button>
                        </div>
                    ) 
                    : 
                    (
                        <div className="header-link">
                            <Link to="/login">
                                <button className="auth" >SignIn </button>
                            </Link>
                            <Link to="/register">
                                <button className="auth">Register </button>
                            </Link>
                        </div>
                    )
                }
            </div>
            
        </div>
    )
}

export default Header;
