import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import UserInput from './UserInput/userInput';
//import UserOutput from './UserOutput/userOutput';


class App extends Component {

  state = {
        persons:[
            { name:"maximilian",    age:27  },
            { name:"stephy", age:28  },
            { name:"robert", age:29  }
        ]
}
switcNameHandler = (newName) => {
        console.log("this was clicked");
        // DO NOT USE THIS KIND OF CODE ====> this.state.person[0].name='maximilian';

        // USE below code for setting
        this.setState({
            persons:[
              { name:newName,  age:27 },
              { name:"stephy", age:28 },
              { name:"robert", age:29 }
            ],
            showPerson:false
  })
}

 togglePersonShowHandler =  () => {
   const doesShowPerson = this.state.showPerson;
   this.setState({showPerson:!doesShowPerson})
 }

nameChangeHandler = (event) =>{
  this.setState({
    persons:[
      { name:"max",  age:27 },
      { name: event.target.value, age:28 },
      { name:"robert", age:21 }
]
})
}

  render() {

    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }

  let person = null;

   if(this.state.showPerson) {
         person =
                       <div>
                      {    //Mapping Person Array into Indivisual Person Obj.
                          this.state.persons.map(person=>{
                          return <Person name={person.name} age={person.age}/>
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
  }

    return (
            <div className="App">
                <h2>Hi, I'am React App</h2>
                <button style={style}   onClick={this.togglePersonShowHandler}>Show Persons</button>
               {person}
            </div>
    );
  }
}

export default App;
