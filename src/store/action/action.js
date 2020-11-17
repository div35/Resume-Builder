import * as actionType from "./actionTypes"

export const selectTemplate = (key) => {
    return {
        type: actionType.selectTemplate,
        key: key
    }
}

export const proceedToPersonalDetails = (key, history) => {
    return dispatch => {
        dispatch(selectTemplate(key));
        history.push("/personalDetails")
    }
}

export const changePersonalInfo = (value, identifier) => {
    return {
        type: actionType.changePersonalInfo,
        value: value,
        identifier: identifier
    }
}
export const changeEducationInfo = (value, identifier) => {
    return {
        type: actionType.changeEducationInfo,
        value: value,
        identifier: identifier
    }
}
