import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';


ReactDOM.render(

  <React.StrictMode>
    
    {/* // From StateProvider.js to warp Our App // */}
  <StateProvider initialState={initialState} reducer={reducer}> {/* reducer = How We push and pull data into datalayer*/}
      <App />
    </StateProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
