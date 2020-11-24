import * as actionType from './../action/actionTypes';

const initialState = {
  personalDetails: {
    firstName: '',
    lastName: '',
    profSummary: '',
    email: '',
    phone: '',
    profession: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pinCode: '',
    id: '',
  },

  educationDetails: {
    college: '',
    degree: '',
    cgpa: '',
    collegeCity: '',
    s_month: '',
    s_year: '',
    e_month: '',
    e_year: '',
    ongoing: 'Done',
    id: '',
  },

  projectSection: {
    name: '',
    s_month: '',
    s_year: '',
    e_month: '',
    e_year: '',
    ongoing: 'Done',
    description: '',
    link: '',
    id: '',
  },

  workSection: {
    name: '',
    location: '',
    s_month: '',
    s_year: '',
    e_month: '',
    e_year: '',
    ongoing: 'Done',
    position: '',
    description: '',
    id: '',
  },

  trainingSection: {
    name: '',
    location: '',
    s_month: '',
    s_year: '',
    e_month: '',
    e_year: '',
    ongoing: 'Done',
    instituteName: '',
    description: '',
    id: '',
  },
  skillSection: {
    name: [],
    id: '',
  },
  ID: '',
  userID: '',
  Autherror: '',
  error: '',
  template: '',
  fontFamily: '',
  color: '',
  fontSize: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.selectTemplateSuccess:
      return {
        ...state,
        template: action.key,
        ID: action.ID,
      };

    case actionType.selectTemplateFailure:
      return {
        ...state,
        error: action.error,
      };

    case actionType.changePersonalInfo:
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          [action.identifier]: action.value,
        },
      };

    case actionType.changeEducationInfo:
      return {
        ...state,
        educationDetails: {
          ...state.educationDetails,
          [action.identifier]: action.value,
        },
      };

    case actionType.changeProjectInfo:
      return {
        ...state,
        projectSection: {
          ...state.projectSection,
          [action.identifier]: action.value,
        },
      };

    case actionType.changeWorkInfo:
      return {
        ...state,
        workSection: {
          ...state.workSection,
          [action.identifier]: action.value,
        },
      };

    case actionType.changeTrainingInfo:
      return {
        ...state,
        trainingSection: {
          ...state.trainingSection,
          [action.identifier]: action.value,
        },
      };

    case actionType.changeSkillInfo:
      return {
        ...state,
      };

    case actionType.registerSuccess:
      return {
        ...state,
        userID: action.uid,
      };

    case actionType.registerFailure:
      return {
        ...state,
        Autherror: action.error,
      };

    case actionType.databaseUpdateFailure:
      return {
        ...state,
        error: action.error,
      };

    case actionType.loadData:
      return {
        ...state,
      };

    default:
      return state
  }
};

export default reducer;
