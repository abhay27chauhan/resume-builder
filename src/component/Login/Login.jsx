import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { isLoaded } from "react-redux-firebase";

import './Login.scss';

import { signIn } from '../../redux/actions/authActions';

function Login(props) {
  console.log("register ", props);
  const auth = props.auth;

  const initialState = {email: "", password: ""};
  const [userCred, setUserCred] = useState(initialState)

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setUserCred({
      ...userCred,
      [name]: value
    })
  }

  const onSubmit = () => {
    props.signIn(userCred);
    setUserCred(initialState);  
  };

  useEffect(() => {
    if(props.auth?.uid){
      props.history.push('/')
    }
  }, [props])

  return (
    <>
      {/* To save from multiple request */}
      {!isLoaded(auth) ? (
        <></>
      ) : (
        <>
          {props.authMine.loading ? (
            <h4 style={{ marginTop: "10%", height: "52vh" }}>
              Patiently Wait...we are resgistering you in
            </h4>
          ) : (
            <div className="login">
              <div className="login__container">
                <div className="login__form-card">
                  <h2 className="login__form-heading">Enter your details</h2>
                  <div className="login__form-section">
                    <div className="login__input-group">
                      <label>Email</label>
                      <div className="effect">
                        <input
                          type="text"
                          name="email"
                          value={userCred.email || ""}
                          onChange={handleChange}
                          autoComplete="off"
                        />
                        <span></span>
                      </div>
                    </div>

                    <div className="login__input-group">
                      <label>Password</label>
                      <div className="effect">
                        <input
                          type="password"
                          name="password"
                          value={userCred.password || ""}
                          onChange={handleChange}
                          autoComplete="off"
                        />
                        <span></span>
                      </div>
                    </div>
                    {props.authMine?.ErrorMessage?.message ? (
                      <div className="login__input-group">
                        <span className="error-message">
                          {props.authMine?.ErrorMessage?.message}
                        </span>
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="login__form-buttons">
                      <button
                        onClick={onSubmit}
                        type="button"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authMine: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (object) => {
      dispatch(signIn(object));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
