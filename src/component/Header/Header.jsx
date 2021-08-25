import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useHistory } from 'react-router-dom'

import './Header.scss';

import { signout } from '../../redux/actions/authActions';

function Header(props) {
    console.log("Header ", props);
    const auth = props.auth
    const history = useHistory();

    const handleSignOut = () => {
        props.signOut()
    }

    useEffect(() => {
        if(props.auth?.uid){
          history.push('/')
        }
    }, [props])
    

    return (
        <div className="header">
            <div className="logo_container">
                <Link to='/'>
                    <h3>RESUME BUILDER</h3>
                </Link>
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
                    isLoaded(auth) && !isEmpty(auth)  ? 
                    (
                        <div className="header-link">
                            <p>Logged in as {auth.email}</p>
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

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
