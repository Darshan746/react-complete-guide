import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';
import Validation from './ValidationComponent/Validation'
import Char from './Char/Char'
//import UserInput from './UserInput/userInput';
//import UserOutput from './UserOutput/userOutput';


class App extends Component {

  state = {
        persons:[
            { id:'dwef',name:"maximilian", age:27  },
            { id:'fds', name:"stephy", age:28  },
            { id:'ferw', name:"robert", age:29  }
        ],
        showPerson:false,
        userInput:''

}
// switcNameHandler = (newName) => {
//         console.log("this was clicked");
//         // DO NOT USE THIS KIND OF CODE ====> this.state.person[0].name='maximilian';

//         // USE below code for setting
//         this.setState({
//             persons:[
//               { name:newName,  age:27 },
//               { name:"stephy", age:28 },
//               { name:"robert", age:29 }
//             ],
//             showPerson:false
//   })
// }

 togglePersonShowHandler =  () => {
   const doesShowPerson = this.state.showPerson;
   this.setState({showPerson:!doesShowPerson})
 }

nameChangeHandler = (event, personIndex) => { 
 const persons = this.state.persons;
 persons[personIndex].name=event.target.value; 
  this.setState({persons});
}


deletePersonHandler = personIndex => { 
  const persons = this.state.persons;
  persons.splice(personIndex,1);
  this.setState({persons})
}

deleteCharHandler = (charIndex)=>{
  const char = this.state.userInput.split('');
  char.splice(charIndex,1);
  const updatedText = char.join('');
  this.setState({userInput:updatedText})
}

inputChangedHandler = (event)=>{
this.setState({userInput:event.target.value});
}





  render() {

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

 let person = null;

 const charList = this.state.userInput.split('').map((ch,index)=>{
              return <Char clickCharacter={()=>this.deleteCharHandler(index)} character={ch} key={index} />
 })


 //Setting the Style dynamically.

 const styleClasses = [];

 if(this.state.persons.length <= 2){
   styleClasses.push('red')
 }
 if(this.state.persons.length <= 1){
  styleClasses.push('bold')
}

   if(this.state.showPerson) {
         person =
                       <div>
                      {    //Mapping Person Array into Indivisual Person Obj.
                          this.state.persons.map((person,personIndex)=>{
                          return <Person 
                                        click= {()=>this.deletePersonHandler(personIndex)}
                                        name={person.name}
                                        age={person.age}
                                        key ={person.id} 
                                        changed={(event) => this.nameChangeHandler(event, personIndex)}/>
                        })
                      }

                          {
                         //INSTEAD OF BELOW CODE,  ABOVE CODE MAPPING ARRAY ELEMENT IS ENOUGH

                                      /* <Person
                                      name={this.state.persons[0].name}
                                      age={this.state.persons[0].age}
                                    />
                                  <Person
                                      name={this.state.persons[1].name}
                                      age={this.state.persons[1].age}
                                      //You could pass the function reference to the other component as a prop
                                      click={this.switcNameHandler.bind(this, 'dars')}
                                      changed = {this.nameChangeHandler}>
                                      MY Hobbies are watching movie and drinking
                                  </Person>
                                  <Person
                                      name={this.state.persons[2].name}
                                      age={this.state.persons[2].age}
                                    /> */}
                    </div>
                    style.backgroundColor='red';
                    style[':hover']={
                                      backgroundColor:'salmon',
                                      color:'black'
                                    }
  }

    return (
      <StyleRoot>
            <div className="App">
                <h2>Hi, I'am React App</h2>
                <p className={styleClasses.join(' ')}>This is really working!!!</p>
                <button style={style}   onClick={this.togglePersonShowHandler}>Show Persons</button>
               {person}

                <p>Assignment 2</p>
             <hr/>
              <input type="text"  onChange={this.inputChangedHandler}  value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
                <Validation inputLenghth ={this.state.userInput.length}/>
                {charList}
            </div>
            </StyleRoot>
    );
    
  }
}

export default Radium(App);
