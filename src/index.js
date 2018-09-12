import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker'

import './styles/index.css'
import App from './containers/App'
import reducer from "../src/store/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route path="/" name="App" component={App}/>
    </Provider>
  </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker()
