import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import App from './components/App'
import { todos } from './reducers'
import './MyFontsWebfontsKit.css'

export const store = createStore(
  todos,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
