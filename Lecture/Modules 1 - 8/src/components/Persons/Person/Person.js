import React , {Component} from 'react';
import { PropTypes } from 'prop-types';
import AuthContext from '../../../context/authContext';

import './Person.css'
import withClass from '../../../hoc/withClass2';

// Component Update life cycle methods are called here
class Person extends Component {

    state = { doubleClick: 0 }
    /* static getDerivedStateFromProps(props, state){
        console.log('1. [Person.js] getDerivedStateFromProps')
        return state
    } */

    static contextType = AuthContext; // allows this component to connect with the context via a 'context' class property

    shouldComponentUpdate(nextProps, nextState){ // *
        console.log('2. [Person.js] shouldComponentUpdate ')
        return (nextProps.name !== this.props.name)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){ // Not used often Eg: to store previous scroll position and scroll the user back after update
        console.log('4. [Person.js] getSnapshotBeforeUpdate')
        return { message: 'snapshot' }
    }

    componentDidUpdate(prevProps, prevState, shapshot){ // * You can send Http requests here but do not re-render
        console.log('5. [Person.js] componentDidUpdate', shapshot)
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
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                    // ref={this.inputElemetRef} 
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

export default withClass(Person, 'Person');