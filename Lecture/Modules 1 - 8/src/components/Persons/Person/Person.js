import React , {Component} from 'react';
import { PropTypes } from 'prop-types';
import AuthContext from '../../../context/authContext';

import './Person.css'
import withClass2 from '../../../hoc/withClass2';

// Component Update life cycle methods are called here
class Person extends Component {

    state = { doubleClick: 0 }
    /* static getDerivedStateFromProps(props, state){
        console.log('1. [Person.js] getDerivedStateFromProps')
        return state
    } */

    static contextType = AuthContext; // allows this component to connect with the context via a 'context' class property


    static getDerivedStateFromProps(newProps, oldState){ // Usually not used --> to update the state based on new props
        console.log('1. [Person.js] getDerivedStateFromProps - update lifecycle', newProps)
        let updatedState = {...oldState} // manipulate the state based on new props
        return updatedState
    }

    shouldComponentUpdate(nextProps, nextState){ // * Here, you can decide whether the update continues or not
        // Obviously, don't cause side-effects here
        console.log('2. [Person.js] shouldComponentUpdate ')
        // return 'true' to continue update and 'false' to cancel update
        return (nextProps.name !== this.props.name) // Only update when the props change. Keep in mind that these props
        // are arrays, that means we are comparing the pointers of the old and new props. In our case, this works because
        // of the way we manipulate the state in App.js (we make a copy of the prev state and change it, so it will have
        // different pointers)
        // *** Also if you are checking if any of the props change (in this case, persons, clicked & changed), you can use
        // PureComponent instead of Component and not implement shouldComponentUpdate().
    }

    // render() is called third, along with the update lifecycle hooks of any children components

    getSnapshotBeforeUpdate(prevProps, prevState){ // Not used often Eg: to store previous scroll position and scroll the
        console.log('4. [Person.js] getSnapshotBeforeUpdate') // user back after the update (last min ops before update)
        return { message: 'snapshot_from_getSnapshotBeforeUpdate' }
    }

    // The snapshot returned in the method above is given as a parameter to the method below

    componentDidUpdate(prevProps, prevState, shapshot){ // * You can send Http requests here but do not re-render the DOM
        console.log('5. [Person.js] componentDidUpdate', shapshot) // synchronously to avoid an infinite loop
    }

    componentWillUnmount(){ // Used to do clean up work --> Runs before a component is removed
        console.log('(-1). [Person.js] componentWillUnmount')
    }

    // To define a reference to an element
    /* constructor(props){
        super(props)
        this.inputElemetRef = React.createRef()
    }
    componentDidMount(){
        this.inputElement.focus()   
    } */
    
    render(){
        console.log('3. [Person.js] render')
        return (
            <div onDoubleClick={this.props.dblclick}>
                <p>{ this.context.authenticated ? 'Logged In' : 'Please log in' }</p>
                <h4 className='red'>Hi, I'm {this.props.name} and I am {this.props.age} years old.</h4>
                <p>{this.props.children}</p>
                <button onClick={this.props.click}> Delete Person </button>
                <input type="text" onChange={this.props.change} value={this.props.name}
                    // ref={(inputEl) => { this.inputElement = inputEl }}   // this is how we use ref for class based
                    // ref={this.inputElemetRef}                                // components
                    />
            </div>
        );
        
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}

export default withClass2(Person, 'Person');