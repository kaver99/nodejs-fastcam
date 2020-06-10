import React, { Component } from 'react';
import './App.css';

class StateSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            front: 'react'
        }
    }

    componentDidMount() {
        this.setState({ front: 'react.js' }, () => {
            console.log(this.state);
        });
    }

    render() {
        return (
            <div>hi</div>
        );
    }
}