import {getFirestore} from 'redux-firestore';
import * as actionType from './actionTypes';
import {v4 as uuid} from 'uuid';

export const selectTemplateSuccess = (key, ID) => {
  return {
    type: actionType.selectTemplateSuccess,
    key: key,
    ID: ID,
  };
};

export const selectTemplateFailure = (error) => {
  return {
    type: actionType.selectTemplateFailure,
    error: error,
  };
};

export const proceedToPersonalDetails_ADD = (key, history, userID) => {
  return async (dispatch, getSate, {getFirebase, getFireStore}) => {
    try {
      // console.log(userID);
      let fireStore = getFirestore();
      let id = userID;
      fireStore
        .collection('resume-data')
        .doc(id)
        .set({ID: id,
          template: key,}, {merge: true});
      await dispatch(selectTemplateSuccess(key, id));
      history.push('/personalDetails');
    } catch (err) {
      dispatch(selectTemplateFailure(err));
    }
  };
};

export const proceedToPersonalDetails_UPDATE = (key, history, id) => {
  return async (dispatch, getSate, {getFirebase, getFireStore}) => {
    try {
      let fireStore = getFirestore();
      fireStore
        .collection('resume-data')
        .doc(id)
        .set({ID: id,
          template: key,}, {merge: true});
      await dispatch(selectTemplateSuccess(key, id));
      history.push('/personalDetails');
    } catch (err) {
      dispatch(selectTemplateFailure(err));
    }
  };
};

export const changePersonalInfo = (value, identifier) => {
  return {
    type: actionType.changePersonalInfo,
    value: value,
    identifier: identifier,
  };
};

export const databaseUpdateFailure = (error) => {
  alert(error);
  return {
    type: actionType.databaseUpdateFailure,
    error: error,
  };
};

export const PersonalInfo_ADD = (data, history, userID) => {
  return async (dispatch, getSate, {getFirebase, getFireStore}) => {
    try {
      let fireStore = getFirestore();
      let id = uuid();
      let doc = {
        id: id,
        ...data,
      };
      fireStore
        .collection('resume-data')
        .doc(userID)
        .set({personalINFO: doc}, {merge: true});
      await dispatch(changePersonalInfo(id, 'id'));
      history.push('/educationSection');
    } catch (err) {
      dispatch(databaseUpdateFailure(err));
    }
  };
};

export const PersonalInfo_UPDATE = (data, history, id, userID) => {
  return async (dispatch, getSate, {getFirebase, getFireStore}) => {
    try {
      let fireStore = getFirestore();
      let doc = {
        id: id,
        ...data,
      };
      fireStore
        .collection('resume-data')
        .doc(userID)
        .set({personalINFO: doc}, {merge: true});
      await dispatch(changePersonalInfo(id, 'id'));
      history.push('/educationSection');
    } catch (err) {
      dispatch(databaseUpdateFailure(err));
    }
  };
};

export const changeEducationInfo = (value, identifier) => {
  return {
    type: actionType.changeEducationInfo,
    value: value,
    identifier: identifier,
  };
};

export const EducationInfo_ADD = (data, history, userID) => {
  return async (dispatch, getSate, {getFirebase, getFireStore}) => {
    try {
      let fireStore = getFirestore();
      let id = uuid();
      let doc = {
        id: id,
        ...data,
      };
      fireStore
        .collection('resume-data')
        .doc(userID)
        .set({educationalINFO: doc}, {merge: true});
      await dispatch(changeEducationInfo(id, 'id'));
      history.push('/workExp');
    } catch (err) {
      dispatch(databaseUpdateFailure(err));
    }
  };
};

export const EducationInfo_UPDATE = (data, history, id, userID) => {
  return async (dispatch, getSate, {getFirebase, getFireStore}) => {
    try {
      let fireStore = getFirestore();
      let doc = {
        id: id,
        ...data,
      };
      fireStore
        .collection('resume-data')
        .doc(userID)
        .set({educationalINFO: doc}, {merge: true});
      await dispatch(changeEducationInfo(id, 'id'));
      history.push('/workExp');
    } catch (err) {
      dispatch(databaseUpdateFailure(err));
    }
  };
};

export const changeWorkInfo = (value, identifier) => {
  return {
    type: actionType.changeWorkInfo,
    value: value,
    identifier: identifier,
  };
};

export const WorkInfo_ADD = (data, history, userID) => {
  return async (dispatch, getSate, {getFirebase, getFireStore}) => {
    try {
      let fireStore = getFirestore();
      let id = uuid();
      let doc = {
        id: id,
        ...data,
      };
      fireStore
        .collection('resume-data')
        .doc(userID)
        .set({workINFO: doc}, {merge: true});
      await dispatch(changeWorkInfo(id, 'id'));
      history.push('/projects');
    } catch (err) {
      dispatch(databaseUpdateFailure(err));
    }
  };
};

export const WorkInfo_UPDATE = (data, history, id, userID) => {
  return async (dispatch, getSate, {getFirebase, getFireStore}) => {
    try {
      let fireStore = getFirestore();
      let doc = {
        id: id,
        ...data,
      };
      fireStore
        .collection('resume-data')
        .doc(userID)
        .set({workINFO: doc}, {merge: true});
      await dispatch(changeWorkInfo(id, 'id'));
      history.push('/projects');
    } catch (err) {
      dispatch(databaseUpdateFailure(err));
    }
  };
};

export const changeProjectInfo = (value, identifier) => {
  return {
    type: actionType.changeProjectInfo,
    value: value,
    identifier: identifier,
  };
};

export const ProjectInfo_ADD = (data, history, userID) => {
  return async (dispatch, getSate, {getFirebase, getFireStore}) => {
    try {
      let fireStore = getFirestore();
      let id = uuid();
      let doc = {
        id: id,
        ...data,
      };
      fireStore
        .collection('resume-data')
        .doc(userID)
        .set({projectINFO: doc}, {merge: true});
      await dispatch(changeProjectInfo(id, 'id'));
      history.push('/trainings');
    } catch (err) {
      dispatch(databaseUpdateFailure(err));
    }
  };
};

export const ProjectInfo_UPDATE = (data, history, id, userID) => {
  return async (dispatch, getSate, {getFirebase, getFireStore}) => {
    try {
      let fireStore = getFirestore();
      let doc = {
        id: id,
        ...data,
      };
      fireStore
        .collection('resume-data')
        .doc(userID)
        .set({projectINFO: doc}, {merge: true});
      await dispatch(changeProjectInfo(id, 'id'));
      history.push('/trainings');
    } catch (err) {
      dispatch(databaseUpdateFailure(err));
    }
  };
};

export const changeTrainingInfo = (value, identifier) => {
  return {
    type: actionType.changeTrainingInfo,
    value: value,
    identifier: identifier,
  };
};

export const TrainingInfo_ADD = (data, history, userID) => {
  return async (dispatch, getSate, {getFirebase, getFireStore}) => {
    try {
      let fireStore = getFirestore();
      let id = uuid();
      let doc = {
        id: id,
        ...data,
      };
      fireStore
        .collection('resume-data')
        .doc(userID)
        .set({trainingINFO: doc}, {merge: true});
      await dispatch(changeTrainingInfo(id, 'id'));
      history.push('/skills');
    } catch (err) {
      dispatch(databaseUpdateFailure(err));
    }
  };
};

export const TrainingInfo_UPDATE = (data, history, id, userID) => {
  return async (dispatch, getSate, {getFirebase, getFireStore}) => {
    try {
      let fireStore = getFirestore();
      let doc = {
        id: id,
        ...data,
      };
      fireStore
        .collection('resume-data')
        .doc(userID)
        .set({trainingINFO: doc}, {merge: true});
      await dispatch(changeTrainingInfo(id, 'id'));
      history.push('/skills');
    } catch (err) {
      dispatch(databaseUpdateFailure(err));
    }
  };
};

export const changeSkillInfo = (value, identifier) => {
  return {
    type: actionType.changeSkillInfo,
    value: value,
    identifier: identifier,
  };
};

export const SkillInfo_ADD = (data, history, userID) => {};

export const SkillInfo_UPDATE = (data, history, id, userID) => {};