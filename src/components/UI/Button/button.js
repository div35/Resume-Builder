import React from "react";
import classes from "./button.module.css";

const button = (props) => (
    <button 
    className={[classes.Button , classes[props.btnType]].join(' ')}
    onClick={props.clicked}
    type={props.type}>{props.children}</button>
);

export default button;