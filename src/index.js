import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./user/views/Homepage";
import Propertydetails from "./user/views/Propertydetails";
import Propertylist from "./user/views/Propertylist";
import Login from "./user/views/login";
import { Provider } from "react-redux";
import { store } from "./redux-store/Store";
import Ownerhomepage from "./owner/pages/Homepage";
import Ownertenants from "./owner/pages/Tenants";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={hist}>
      <Switch>
        <Route exact path="/propertydetails/:id" component={Propertydetails} />
        <Route path="/propertylist" component={Propertylist} />
        <Route path="/ownerhomepage" component={Ownerhomepage} />
        <Route path="/Ownertenants" component={Ownertenants} />
        <Route path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
