import React, { Component } from 'react';
import './App.css';

import Person from '../components/Persons/Person/Person'
import AppHook from './app_hook';
import AppClass from './app_class';
// import UserInput from '../components/Persons/Person/UserInput/UserInput';
// import UserOutput from '../components/Persons/Person/UserOutput/UserOutput';
// import Validation from '../components/Persons/Person/Validation/Validation';
// import Characters from '../components/Persons/Person/Characters/Characters';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import withClass2 from '../hoc/withClass2';
import AuthContext from '../context/authContext';

// Component Create life cycle methods are called here
class App extends Component {

  // We get only one state property per class-based component
  state = {
    persons: [
      { id: 'a1',name: 'Manu', age: 29 },
      { id: 'b1',name: 'Max', age: 27 },
      { id: 'c1',name: 'Stephanie', age: 25 }
    ],
    username: 'Of your choice',

    showPersons: true,

    inputText: '',

    showCockpit: true,

    changeCounter: 0, // Counts everytime inputChangedHandler is called (when we type in the input fields)

    authenticated: false  // Initially not logged in
  }

  constructor(props){
    super(props); // Execute constructor of parent class to initialize everyhing and set the state
                  // This is mandatory if you implement the constructor, otherwise it's done automatically.
    console.log('1. [App.js] constructor')
    // this.state = {...} --> You can also initialize state here, but we shouldn't cause side-effects (impacts performance)
    this.btnRef = React.createRef()
  }

  // This is actually called first when the component gets updated (gets new props / state)
  // The update lifecycle hooks are illustrated in the Person component
  static getDerivedStateFromProps(newProps, oldState){ // Usually not used --> to update the state based on new props
    console.log('2. [App.js] getDerivedStateFromProps', newProps)
    let updatedState = {...oldState} // manipulate the state based on new props
    return updatedState
  }

  // the render() method is executed third... also every child component called inside render() will also run with the
  // same steps (order of lifecycle hooks) as this component

  componentDidMount(){ // * Send http requests (do side-effects) here, after our UI is rendered
    console.log('4. [App.js] componentDidMount')
    // Normally we shouldn't call setState in here synchronously (outside of an acync call, like waiting for Http response)
    // because it will just cause a re-render of the component which we could have done before render() was called.

    // This is how we use ref (reference to an element) in class based components
    // this.btnref.current.click() // this will click a button referenced by 'btnRef' on componenet mount
  }

  // Use this naming convention '..Handler' for functions not executed directly, but instead passed as a reference
  // This function changes the name of the first person (when a person gets double clicked)
  switchNameHandler = (newName) => {
    console.log('Clicked')
    // this.state.persons = [] --> Bad practice; will not update the DOM and doesn't change the state
    //Overrides the state property and updates the DOM
    this.setState({
      persons: [
        { id: 'a1', name: newName, age: 29 },
        { id: 'b2', name: 'Maximilian', age: 28 },
        { id: 'c3', name: 'Stephan', age: 27 }
      ],
      otherState: 'No need to update everytime using setState'
    })
  }

  // This method will change the name of each person depending on which input field it is typed in
  twoWayHandler = (personIndex, event) => {
    // Had you not received personIndex  as a param but instead you received 'person.id', you can do this --->
      // let personIndex = this.state.persons.findIndex(p => p.id === id) ---> Returns the index of the first match
      // const person = { ...this.state.persons[personIndex] } ---> To get a copy of the specific person
    let persons = this.state.persons.slice() // To obtain a copy of the array instead of a pointer to the actual array
    persons[personIndex].name = event.target.value // Change the appropriate field on the copy of persons
    this.setState({ persons: persons })
  }

  changeUsernameHandler = event => {
    this.setState({
      username: event.target.value
    })
  }

  // Toggles the <Person /> components
  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [ ...this.state.persons ] // To obtain a copy of the array instead of a pointer to the actual array
    persons.splice(personIndex, 1) // splice/delete one element at the given index
    this.setState({ persons: persons })
  }

  inputChangedHandler = (event) => {
    this.setState((prevState, currentProps) => { // This is the right way of using previous state to update the current
      return {                             // state because setState doesn't always execute immediately.
        inputText: event.target.value,
        changeCounter: prevState.changeCounter + 1
      }
    })
    this.setState({ textLength: this.state.inputText.length })
  }
  deleteCharHandler = (charIndex) => {
    const text = this.state.inputText.split('')
    text.splice(charIndex, 1)
    const updatedText = text.join('')
    this.setState({ inputText: updatedText })
  }

  authenticationHandler = () => { //To change the context
    this.setState({
      authenticated: !this.state.authenticated 
    })
  }

  render(){
    console.log('3. [App.js] render') // All child commponents will be rendered their lifecycle hooks will run
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null
    let buttonClass
    // This is a more perfered way of using conditionals in components
    if(this.state.showPersons){
      persons = (
        <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          doubleClicked={this.switchNameHandler}
          changed={this.twoWayHandler}
          />
      )
      buttonClass = 'red-button'
    }

  
    return (
    <WithClass classes="App">
      <button onClick={ () => {this.setState( {showCockpit: !this.state.showCockpit} )} }>Toggle Cockpit</button>
      <AuthContext.Provider value={ {
        authenticated: this.state.authenticated,
        login: this.authenticationHandler
      } }>

      {this.state.showCockpit ?
      <Cockpit title={this.props.appTitle} personsLength={this.state.persons.length} style={style} clicked={this.switchNameHandler}/>
      : null }
      {/* Not recommended, use bind instead */}
      {/* <button onClick={ this.switchNameHandler }>Click Me!</button> -- If the function has no parameters */}

      <button className={buttonClass} 
              onClick={this.togglePersonsHandler}
              // ref={(btnRef) => {btnRef.click()}}   // We can do this inline
              ref={this.btnRef}> Toggle Persons </button>

      { persons }
      </AuthContext.Provider>
      
      {/* This is another way of adding conditionals although its not prefered */}
      { this.state.showPersons ? 
      <div className='person'>
        <Person name="Default Name" age="00" click={ this.switchNameHandler.bind(this, 'Manu!!!') }> 
          { this.state.otherState } 
        </Person> {/* Alternative better way of passing parameters ---> .bind(this, 'param') */}
      </div>
      : null
      }

      <br /><br />

      <AppHook />
      <AppClass />

      {/* Module 3 assignment */}
      {/* <UserInput changeUsername={this.changeUsernameHandler} username={this.state.username} />
      <UserOutput username={this.state.username} />
      <UserOutput username={this.state.username} /> */}

      {/* Module 4 Assignment */}
      {/* <input type="text" onChange={ this.inputChangedHandler } value={this.state.inputText} />
      <p>Length: { this.state.inputText } </p>
      <Validation textLength={ this.state.inputText.length } />
      {
        this.state.inputText.split('').map((char, index) => {
          return <Characters char={char} key={index} clicked={ () => this.deleteCharHandler(index) } />
        })
      } */}

    </WithClass>
    );
  }

  // return React.createElement('div', { className: 'App' },
  //   React.createElement('h2', null, 'This is rendered uning React.createElement()'))
}

export default withClass2(App, 'App');
