import * as actionType from "./../action/actionTypes"

const initialState = {
    template : "",
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
        college:"",
        degree:"",
        cgpa:"",
        city:"",
        month:"",
        year:""
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.selectTemplate:
            return {
                ...state,
                template: action.key
            }
        default:
            return state;
    }
}

export default reducer;