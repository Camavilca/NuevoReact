import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


/** */
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'


// sirve para realizar cosas asincronas
import thunk from 'redux-thunk'
import reducers from './reducers'

const history = createHistory();
const middleware = [routerMiddleware(history), thunk];
const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)
/** */

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>
    ,
    document.getElementById('root'));
serviceWorker.unregister();
