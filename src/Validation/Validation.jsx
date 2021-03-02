import React, { Component } from "react";


const validation = (props) => {
    let validationMessage = "Text is long enough"
    if (props.inputValue <=5){
        validationMessage="Text is too short"
    }
    return(
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default validation