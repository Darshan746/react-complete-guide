import React from 'react';

const userOutput = (props)=>{
    return (
            <div>
                <p> UserName: {props.userName}  </p>
                <p > Am overwriting the sentence! </p>
            </div>
    );

}
export default userOutput;