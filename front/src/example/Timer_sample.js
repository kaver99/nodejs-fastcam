import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.tick();
    }

    tick() {
        this.setState({
            time: new Date()
        }, () => {
            console.log(this.state);
        });
    }

    render() {
        const { time } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    {time.date.toLocaleTimeString()}
                </header>
            </div>
        );
    }
}

export default Timer;