import React from "react";
import Person from './Person/Person'

const Persons = props => props.persons.map( (person, index) => {
    return (
      <Person name={person.name} age={person.age} 
        key={person.id} // we would normally use _id if the data comes from a database
          // key is used so that react will update a specific element instead of a whole list when a change occurs
        // change={ (event) => this.twoWayHandler(event, index) } --> event is the first parameter
        change={ props.changed.bind(this, index) } 
        dblclick={ props.doubleClicked.bind(this, 'Manunu!!!') }
        click={ () => props.clicked(index) }
      > Hello </Person> 
      // We add the key attribute for better efficiency in rendering the elements that changed (we would normally use a database id)
    )
  } )

export default Persons;