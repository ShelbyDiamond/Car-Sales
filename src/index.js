import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

//import createStore and provider
import { createStore } from "redux"
import { Provider } from "react-redux"
import clunckerReducer from "./reducers"
import "bulma/css/bulma.css"
import "./styles.scss"

const store = createStore(clunckerReducer)

const rootElement = document.getElementById("root")
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
