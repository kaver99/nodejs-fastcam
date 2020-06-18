import React, { useState, useEffect } from 'react'; // { useState } 비구조화 호출 방식

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from '../store/modules/counter/counter';

import '../App.css';

const LoadingBar = () => <div>Loading..</div>;

// redux
const mapStateToProps = ({ counter }) => ({
    number: counter.number,
});
const mapDispatchToProps = dispatch => bindActionCreators({ increment, decrement }, dispatch);

const HookSample = (props) => {
    const [loading, setLoading] = useState(true);
    const number = props.number; // redux

    const onClickPlusEvent = e => {
        e.preventDefault();
        // setCount(count +1);
        props.increment(); // redux
        setLoading(true);
    }
    const onClickMinusEvent = e => {
        e.preventDefault();
        // (count > 0) ? setCount(count -1) : setCount(0);
        props.decrement(); // redux
        (number > 0) ? setLoading(true) : setLoading(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => {
            setLoading(true);
        }
    }, [number]);

    // button style Css
    const btnStyled = {
        border: 'none',
        backgroundColor: '#008CBA',
        color: '#fff',
        width: '3rem',
        height: '3rem',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '2rem',
        borderRadius: '.25rem',
        margin: '5px',
        cursor: 'pointer',
    };

    return (
        <div className="App-header">
            {
                loading && <LoadingBar />
            }
            <h2>{number}</h2>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <button style={btnStyled} onClick={onClickPlusEvent}>+</button>
                <button style={btnStyled} onClick={onClickMinusEvent}>-</button>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(HookSample); // redux