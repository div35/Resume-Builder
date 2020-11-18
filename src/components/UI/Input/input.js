import React from "react";
import classes from "./input.module.css"

const Input = (props) => {

    let inputElement = null;
    let req = props.required ? true : false;
    let chk = props.checked ? true : false;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={classes.InputElement}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.changed}
                required={req}
                checked={chk}
                 />;
            break;

        case ('textarea'):
            inputElement = <textarea
                className={classes.InputElement}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.changed} />
            break;

        case ('select'):
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed}>
                </select>
            );
            break;
        
        default:
            inputElement = null
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

}

export default Input;