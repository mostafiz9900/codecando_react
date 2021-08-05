/* eslint-disable new-cap */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Clock extends Component {
    state = { date: new Date() };
    /*   constructor(props) {
        super(props);
        this.state = { date: new Date() };
    } */

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <h1 className="heading">
                <span className="text">
                    {this.state.date.toLocaleTimeString(this.props.locale)}
                </span>
            </h1>
        );
    }
}

export default Clock;
