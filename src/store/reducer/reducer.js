import * as actionType from './../action/actionTypes';

const initialState = {
  template: '',
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
  },

  educationDetails: {
    college: '',
    degree: '',
    cgpa: '',
    collegeCity: '',
    month: '',
    year: '',
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
  },

  workSection: {
    name:"",
    location:"",
    s_month: '',
    s_year: '',
    e_month: '',
    e_year: '',
    ongoing: 'Done',
    position:"",
    description: '',
  },
  trainingSection: {
    name:"",
    location:"",
    s_month: '',
    s_year: '',
    e_month: '',
    e_year: '',
    ongoing: 'Done',
    instituteName:"",
    description: '',
  },
  skillSection: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.selectTemplate:
      return {
        ...state,
        template: action.key,
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
        ...state
      };

    default:
      return state;
  }
};

export default reducer;
