import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import {storeFactory} from './store';
import registerServiceWorker from './registerServiceWorker';

const store = storeFactory();

window.React = React;
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));


registerServiceWorker();
