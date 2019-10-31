import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import App from './containers/App/App';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools())


ReactDOM.render(
  <Router>
    <Provider
      store={store} >
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
