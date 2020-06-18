import React from 'react';
// import StyledComponentEx from './component/styledcomponent/StyledComponentEx';
// import HookSample from './example/HookSample';
import TodoComponent from './component/todo/Todo';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/modules';

import './App.css';

// redux Chrome DevTool
const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// redux Store
const store = createStore(rootReducer, devTool);

function App() {
  return (
    // redux
    <Provider store={store}>
      {/* <StyledComponentEx /> */}
      {/* <HookSample /> */}
      <TodoComponent />
    </Provider>
  );
}

export default App;