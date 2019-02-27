import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';


import { createStore, applyMiddleware} from "redux"
import thunk from 'redux-thunk'

import reducer from './redux/reducer.js'
import { Provider } from 'react-redux'

import 'semantic-ui-css/semantic.min.css';



const store = createStore(reducer, applyMiddleware(thunk));



ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

