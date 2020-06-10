import { React, Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
    }

    // 화면 UI가 rendering(출력)되기 전 실행되는 함수
    componentWillMount() {

    }

    // 화면 UI가 rendering(출력) 이후 실행되는 함수
    componentDidMount() {

    }
    
    componentWillUnmount() {

    }

    render() {
        return (
            {

            }
        );
    }
}

export default LifeCycle;