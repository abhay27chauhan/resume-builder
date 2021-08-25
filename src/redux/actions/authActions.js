import * as actionTypes from "./actionTypes";

export const register = (userData) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: actionTypes.REGISTER_REQUEST });
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then(async (data) => {
        // console.log(data);
        await firestore.collection("users").doc(data.user.uid).set({
          email: userData.email,
          resumeIds: [],
        });
        dispatch({ type: actionTypes.REGISTER_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.REGISTER_FAILED, error: err });

        setTimeout(() => {
          dispatch({ type: actionTypes.REMOVE_ERROR });
        }, 2000);
      });
  };
};

export const signIn = (userData) => {
  return async (dispatch, getState, { getFirebase }) => {
    dispatch({ type: actionTypes.SIGN_IN_REQUEST });
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(userData.email, userData.password);

      dispatch({ type: actionTypes.SIGN_IN_SUCCESS });

    } catch (err) {
      dispatch({ type: actionTypes.SIGN_IN_FAILED, error: err });

      setTimeout(() => {
        dispatch({ type: actionTypes.REMOVE_ERROR });
      }, 2000);
    }
  };
};

export const signout = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: actionTypes.SIGN_OUT_REQUEST });
    console.log("signing out");
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: actionTypes.SIGN_OUT_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.SIGN_OUT_FAILED, error: err });
      });
  };
}