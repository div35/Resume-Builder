import {getFirestore} from 'redux-firestore';
import * as actionType from './actionTypes';
import {uuid} from "uuidv4"

export const selectTemplate = (key, ID) => {
  return {
    type: actionType.selectTemplate,
    key: key,
    ID: ID
  };
};

export const proceedToPersonalDetails_ADD = (key, history) => {
  return async (dispatch, getSate, {getFirebase, getFireStore}) => {
    try {
      let fireStore = getFirestore();
      let id = uuid();
      let doc = {
        id: id,
        templateID: key,
      };
      fireStore.collection('resume-data').doc(id).set({document: doc});
      await dispatch(selectTemplate(key, id));
      history.push('/personalDetails');
    } catch (err) {
      console.log(err);
    }
  };
};

export const proceedToPersonalDetails_UPDATE = (key, history, id) => {
  return async (dispatch, getSate, {getFirebase, getFireStore}) => {
    try {
      let fireStore = getFirestore();
      let doc = {
        id: id,
        templateID: key,
      };
      fireStore.collection('resume-data').doc(id).set({document: doc});
      await dispatch(selectTemplate(key, id));
      history.push('/personalDetails');
    } catch (err) {
      console.log(err);
    }
  };
};

export const changePersonalInfo = (value, identifier) => {
  return {
    type: actionType.changePersonalInfo,
    value: value,
    identifier: identifier
  };
};

export const changeEducationInfo = (value, identifier) => {
  return {
    type: actionType.changeEducationInfo,
    value: value,
    identifier: identifier,
  };
};

export const changeProjectInfo = (value, identifier) => {
  return {
    type: actionType.changeProjectInfo,
    value: value,
    identifier: identifier,
  };
};

export const changeWorkInfo = (value, identifier) => {
  return {
    type: actionType.changeWorkInfo,
    value: value,
    identifier: identifier,
  };
};

export const changeTrainingInfo = (value, identifier) => {
  return {
    type: actionType.changeTrainingInfo,
    value: value,
    identifier: identifier,
  };
};

export const changeSkillInfo = (value, identifier) => {
  return {
    type: actionType.changeSkillInfo,
    value: value,
    identifier: identifier,
  };
};
