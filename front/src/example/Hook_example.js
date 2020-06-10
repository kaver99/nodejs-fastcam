import React, { useState } from 'react'; // { useState } 비구조화 호출 방식

import './App.css';

function HookSample() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => setCount(count + 1)}>{count}</button>
            </header>
        </div>
    );
}

export default HookSample;