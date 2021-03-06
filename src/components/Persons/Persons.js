import React, {Component} from 'react';
import Person from '../Persons/Person/Person'


class Persons extends Component {
  render() {
    return  this.props.persons.map((person,index)=>{
  
                   return <Person 
                      click = {()=>this.props.clicked(index)}
                      name={person.name}
                      age={person.age}
                      key ={person.id} 
                      changed={(event) => this.props.changed(event, index)}>
                      </Person>
      });
    }
    
  }

export default Persons;