import React, { Component } from 'react';
import './App.css';
import Validation from '../components/ValidationComponent/Validation'
import Char from '../components/Char/Char'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';


class App extends Component {


  constructor(props)
  {
    super(props);
    console.log("Props recieved in App.js constructor "+ props);
    this.state = {
        persons:[
            { id:'dwef',name:"maximilian", age:27  },
            { id:'fds', name:"stephy", age:28  },
            { id:'ferw', name:"robert", age:29  }
        ],
        showPerson:false,
        userInput:'',
        toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log("mounted Successfully");
  }

  componentDidMount(){
    console.log("App.js inside componentDidMount ")
  }

 togglePersonShowHandler =  () => {
   const doesShowPerson = this.state.showPerson;
   this.setState((prevState,props) =>{
     return{
       showPerson:!doesShowPerson,
       toggleClicked: prevState.toggleClicked+1
     }
   }
   )}

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

  render() 
  {
    console.log("Render method have called in App.js")
      let person = null;
      const charList = this.state.userInput.split('').map((ch,index)=>
      {         
        return <Char clickCharacter={()=>this.deleteCharHandler(index)} character={ch} key={index} />
      })

   if(this.state.showPerson) 
   {
         person =
                    <div>
                      <Persons
                           persons={this.state.persons}
                           clicked={this.deletePersonHandler}
                           changed={this.nameChangeHandler}>
                      </Persons>
                    </div>
  }

    return (
            
            <WithClass stylesObj="App" >
               <Cockpit 
                      togglePerson ={this.togglePersonShowHandler}
                      persons = {this.state.persons}> 
                </Cockpit>
               {person}

             <p>Assignment 2</p>
             <hr/>
              <input type="text"  onChange={this.inputChangedHandler}  value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
                <Validation inputLenghth ={this.state.userInput.length}/>
                {charList}
            
            </WithClass>
          
    );
    
  }
}

export default App;
