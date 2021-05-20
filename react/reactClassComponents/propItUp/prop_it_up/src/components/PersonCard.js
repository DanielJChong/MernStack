import React, { Component } from 'react';
    
    
class PersonCardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            update:this.props.age
        }
    }
    addAge = () => {
        this.setState({update:this.state.update +1});
    }
    render() {
        const { firstName, lastName, age, hairColor } = this.props; 
        return (
            <div>
                <h1> { lastName }, { firstName } </h1>
                <h4>Age: {this.state.update} </h4>
                <h4>Hair Color: { hairColor }</h4>
                <button onClick={ this.addAge }>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}
    
export default PersonCardComponent;