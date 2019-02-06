import React from 'react';
import Aux from '../../hoc/Aux'


const cockPit = (props) => {



    const style = {
        backgroundColor:'green',
        color:'white',
        font:'inherit',
        border:'1px solid Black',
        padding:'8px',
        cursor:'pointer',
        ':hover':{
            backgroundColor:'lightgreen',
            color:'white'
        }
      }
    const styleClasses = [];

        if(props.persons.length <= 2){
            styleClasses.push('red')
        }
        if(props.persons.length <= 1){
            styleClasses.push('bold')
        }
        style.backgroundColor='red';
        style[':hover']={
                          backgroundColor:'salmon',
                          color:'black'
                        }
    
        return(
            //to Avoid un necessary div element we are wrapping with Aux component.
            <Aux> 
                 <h2>{props.appTitle}</h2>
                <p className={styleClasses.join(' ')}>This is really working!!!</p>
                <button style={style}   onClick={props.togglePerson}>Show Persons</button>
            </Aux>
)}

export default cockPit
