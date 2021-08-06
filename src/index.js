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
import Ownertenantlist from "./owner/pages/Tenantlist";
import Ownerpropertylist from "./owner/pages/Propertylist";
import Ownercomplaintlist from "./owner/pages/Complaintlist";
import Mypropertydetails from "./user/views/Mypropertydetails";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={hist}>
      <Switch>
        <Route path="/propertydetails" component={Propertydetails} />
        <Route path="/propertylist" component={Propertylist} />
        <Route path="/ownerhomepage" component={Ownerhomepage} />
        <Route path="/ownertenantlist" component={Ownertenantlist} />
        <Route path="/ownerpropertylist" component={Ownerpropertylist} />
        <Route path="/ownercomplaintlist" component={Ownercomplaintlist} />
        <Route path="/mypropertydetails" component={Mypropertydetails} />
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
