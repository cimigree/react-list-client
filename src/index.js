import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import { Provider } from "react-redux"
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker'

import './styles/index.css'
import App from './containers/App'
import itemListReducer from "../src/store/reducers/itemsListReducer"
import itemPageReducer from "../src/store/reducers/itemPageReducer"
import storePageReducer from "../src/store/reducers/storePageReducer"
import categoryPageReducer from "../src/store/reducers/categoryPageReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  list: itemListReducer,
  page: itemPageReducer,
  store: storePageReducer,
  category: categoryPageReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route path="/" name="App" component={App}/>
    </Provider>
  </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker()
