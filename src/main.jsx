import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import * as serviceWorker from './serviceWorker';
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

serviceWorker.unregister();
