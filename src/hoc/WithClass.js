import React from 'react';


const WithClass = (props) => (
        <div className={props.stylesObj}>
            {props.children}
        </div>

)

export default WithClass;