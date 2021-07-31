import reportWebVitals from './reportWebVitals'
import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './user/views/Homepage'
import Propertydetails from './user/views/Propertydetails'
import Propertylist from './user/views/Propertylist'
import Login from './user/views/login'

const hist = createBrowserHistory()

ReactDOM.render(
  <BrowserRouter history={hist}>
    <Switch>
      <Route path="/propertydetails" component={Propertydetails} />
      <Route path="/propertylist" component={Propertylist} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Homepage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
