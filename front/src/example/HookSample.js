import React, { useState, useEffect } from 'react'; // { useState } 비구조화 호출 방식

import '../App.css';


const LoadingBar = () => <div>Loading..</div>;

export default function HookSample() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const onClickPlusEvent = e => {
        e.preventDefault();
        setCount(count + 1);
        setLoading(true);
    }
    const onClickMinusEcent = e => {
        e.preventDefault();
        (count > 0) ? setCount(count -1) : setCount(0);
        (count > 0) ? setLoading(true) : setLoading(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => {
            setLoading(true);
        }
    }, [count]);

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
            <h2>{count}</h2>
            <div style={{width: '100%'}}>
                <button style={btnStyled} onClick={onClickPlusEvent}>+</button>
                <button style={btnStyled} onClick={onClickMinusEcent}>-</button>
            </div>
        </div>
    );
}