import * as actionType from "./../action/actionTypes"

const initialState = {
    template: "",
    personalDetails: {
        firstName: "",
        lastName: "",
        profSummary: "",
        email: "",
        phone: "",
        profession: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: ""
    },

    educationDetails: {
        college: "",
        degree: "",
        cgpa: "",
        collegeCity: "",
        month: "",
        year: ""
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.selectTemplate:
            return {
                ...state,
                template: action.key
            }

        case actionType.changePersonalInfo:
            return {
                ...state,
                personalDetails: {
                    ...state.personalDetails,
                    [action.identifier]: action.value
                }
            }

        case actionType.changeEducationInfo:
            return {
                ...state,
                educationDetails: {
                    ...state.educationDetails,
                    [action.identifier]: action.value
                }
            }

        default:
            return state;
    }
}

export default reducer;