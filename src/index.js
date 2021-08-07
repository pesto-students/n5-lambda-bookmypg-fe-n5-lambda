import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./user/views/Homepage";
import Propertydetails from "./user/views/Propertydetails";
import Propertylist from "./user/views/Propertylist";
import Login from "./user/views/login";
import Userpaymenthistory from "./views/Userprofile/Userpaymenthistory";
import Myprofile from "../src/views/Userprofile/Myprofile";
import { Provider } from "react-redux";
import { store } from "./redux-store/Store";
import Ownertenantlist from "./owner/pages/Tenantlist";
import Ownerpropertylist from "./owner/pages/Propertylist";
import Ownercomplaintlist from "./owner/pages/Complaintlist";
import Mypropertydetails from "./user/views/Mypropertydetails";
import OwnerHomepage from "./owner/pages/Homepage";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={hist}>
      <Switch>
        <Route exact path="/tenant-list" component={Ownertenantlist} />
        <Route
          exact
          path="/owner-property-list"
          component={Ownerpropertylist}
        />
        <Route
          exact
          path="/owner-complaint-list"
          component={Ownercomplaintlist}
        />
        <Route exact path="/mypropertydetails" component={Mypropertydetails} />
        <Route exact path="/propertylist" component={Propertylist} />
        <Route exact path="/property-details/:id" component={Propertydetails} />
        <Route exact path="/property-list" component={Propertylist} />
        <Route exact path="/owner-home" component={OwnerHomepage} />
        <Route exact path="/myprofile" component={Myprofile} />
        <Route exact path="/paymenthistory" component={Userpaymenthistory} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
