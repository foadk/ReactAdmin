import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UIReducer from './store/reducers/UI';
import AuthReducer from './store/reducers/Auth';
import ResourceReducer from './store/reducers/Resource';
import AuthorizationReducer from './store/reducers/Authorization';

const rootReducer = combineReducers({
    UI: UIReducer,
    Auth: AuthReducer,
    Resource: ResourceReducer,
    Authorization: AuthorizationReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(Thunk)
));

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
