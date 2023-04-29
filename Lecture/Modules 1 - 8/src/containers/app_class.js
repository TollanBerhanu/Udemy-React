import { Component } from "react";

class app_class extends Component{
    state = {
        text: 'Hello'
    }

    changeGreeting = () => {
        if(this.state.text === 'Hello') this.setState({ text: 'Hi' })
        else this.setState({ text: 'Hello' })
    }

    render(){
        return (
            <div>
                <button onClick={this.changeGreeting} >Change Greeting</button>
                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default app_class