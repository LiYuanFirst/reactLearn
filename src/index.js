import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

import store from './store/store'

//3.Provider
ReactDOM.render(<Provider store={store}><App name="111"/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
