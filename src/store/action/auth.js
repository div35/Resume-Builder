import {getFirestore} from 'redux-firestore';
import * as actionType from './actionTypes';

export const registerSuccess = (uid) => {
  return {
    type: actionType.registerSuccess,
    uid: uid,
  };
};

export const registerFailure = (errorMessage) => {
  return {
    type: actionType.registerFailure,
    error: errorMessage,
  };
};

export const loadData = (data) => {
  console.log(data);
  return {
    type: actionType.loadData,
    data: data,
  };
};

export const register = (email, password, isRegister) => {
  return async (dispatch, getState, {getFirebase, getFireStore}) => {
    try {
      let firebase = getFirebase();
      if (isRegister) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => {
            dispatch(registerSuccess(user.user.uid));
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            dispatch(registerFailure(errorMessage));
          });
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            // console.log(user.user);
            dispatch(registerSuccess(user.user.uid));
            let db = getFirestore();
            let tempState;
            db.collection('resume-data')
              .get()
              .then(function (data) {
                // console.log(data.docs[0].data());
                tempState = data.docs.filter((d) => {
                  return d.data() && d.data().document && d.data().document.id && d.data().document.id === user.uid;
                });
                if (tempState && tempState.length > 0) {
                  dispatch(loadData(tempState[0].data()));
                }
              })
            
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            dispatch(registerFailure(errorMessage));
          });
      }
    } catch (err) {
      dispatch(registerFailure(err));
    }
  };
};

export const checkAuthStatus = () => {
  return async (dispatch, getState, {getFirebase, getFireStore}) => {
    try {
      let firebase = getFirebase();
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          dispatch(registerSuccess(user.uid));
          let db = getFirestore();
          let tempState;
          db.collection('resume-data')
            .get()
            .then(function (data) {
              // console.log(data.docs[0].data());
              tempState = data.docs.filter((d) => {
                return d.data() && d.data().document && d.data().document.id && d.data().document.id === user.uid;
              });
              
              if (tempState && tempState.length > 0) {
                dispatch(loadData(tempState[0].data()));
              }
            })
        }
        else{

        }
      });
    } catch (error) {
      dispatch(registerFailure(error));
    }
  };
};

export const authLogout = () => {
  return async (dispatch, getState, {getFireStore, getFirebase}) => {
    try {
      let firebase = getFirebase();
      firebase
        .auth()
        .signOut()
        .then(function () {
          alert('YOU ARE SUCCESSFULLY LOGGED OUT');
          dispatch(registerSuccess(''));
        })
        .catch(function (error) {
          dispatch(registerFailure(error));
        });
    } catch (err) {
      dispatch(registerFailure(err));
    }
  };
};
