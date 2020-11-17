import * as actionType from "./actionTypes"

export const selectTemplate = (key) => {
    console.log(key);
    return{
        type: actionType.selectTemplate,
        key: key
    }
}