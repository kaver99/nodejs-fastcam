import React from 'react';
import TodoComponent from './component/todo/Todo';
import HookSample from './example/HookSample';
import UseEffectSample from './example/UseEffectSample';

import './App.css';


function App() {
  
  return (
    <div className="App">
      {/* <header className="App-header">
        Hello World!
      </header> */}
      {/* <HookSample /> */}
      {/* <TodoComponent /> */}
      <UseEffectSample />
    </div>
  );
}

export default App;