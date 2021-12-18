import React, { Component, useState, } from 'react';
import Clickme from './ClickMe';

class Counter extends Component {

    state = {
        date : new Date(),
    };

    second(){
        this.setState({
            date : new Date()
        });
    };

    componentDidMount(){
        this.changeTime = setInterval(
            ()=> this.second(),1000);
    };

    componentWillUnmount(){
        clearInterval(this.changeTime);
        clearInterval(this.changeNumber);
    };

    
    render() {
        return (
            <div>
                <h1>Hi from React!</h1>
                <h3>Now this time is {this.state.date.toLocaleTimeString()}</h3>
                <hr />
                <br />
                <Clickme />
            </div>
        );
    }
}

export default Counter;
