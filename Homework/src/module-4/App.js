import React, { Component } from 'react'
import Validation from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
import './App.css'

class App extends Component {
    state = {
        paragraph: 'This is just a random paragraph. The information inside the paragraph doesn\'t matter,' + 
                    'we just need the length',
        renderError: false,
        errorCount: 0,

        smallText: 'Hey'
    }
    
    paragraphChangedHandler = (event) => {
        this.setState  ({
            paragraph: event.target.value
        })
    }

    lengthInputChangedHandler = () => {
        let ec = this.state.errorCount

        this.setState ({
            renderError: true,
            errorText: (ec < 5) ? 'Stop trying to change the length manually!': 'Stop that!',
            errorCount: ec + 1
        })
    }

    smallTextChangedHandeler = (event) => {
        this.setState({
            smallText: event.target.value
        })
    }

    removeCharHandler = (idx) => {
        let st = this.state.smallText
        this.setState({
            smallText: st.substring(0,idx) + st.substring(idx+1)
        })
    } 

    render() {
        return (
            <div>
                <h3>Homework - Module 4</h3>

                <textarea cols='100' rows='5' value={this.state.paragraph} onChange={ (event) => this.paragraphChangedHandler(event) } />
                <p>{this.state.paragraph}</p>
                
                <input className='length-input' type='text' value={this.state.paragraph.length} onChange={this.lengthInputChangedHandler}/>
                { 
                    this.state.renderError ? <p className='error-paragraph' >{this.state.errorText}</p> : null
                }

                <Validation paragraphLength={this.state.paragraph.length} />

                Enter Text:
                <input type='text' value={this.state.smallText} onChange={(event) => this.smallTextChangedHandeler(event)} />
                <hr />
                {
                    this.state.smallText.split('').map((letter, idx) =>
                        <CharComponent clicked={() => this.removeCharHandler(idx)}>{letter}</CharComponent>
                    )
                }
            </div>
        )
    }
}

export default App