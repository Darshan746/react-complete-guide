import React from 'react';



const validation = (props) => {
    let validationMessage = "text is too enough";
        if(props.inputLenghth<=5) {
            validationMessage = "text is too short";
        }
    return(
        <div>
            <p>{validationMessage}</p>
        </div>
    
    )

}

export default validation;