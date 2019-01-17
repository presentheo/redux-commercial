import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css';

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
