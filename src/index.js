import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./user/pages/HomePage";
import PropertyDetails from "./user/pages/PropertyDetails";
import PropertyList from "./user/pages/PropertyList";
import Userpaymenthistory from "./views/Userprofile/Userpaymenthistory";
import { Provider } from "react-redux";
import { store } from "./redux-store/Store";
import Ownertenantlist from "./owner/pages/Tenantlist";
import Ownerpropertylist from "./owner/pages/Propertylist";
import Ownercomplaintlist from "./owner/pages/Complaintlist";
import MyProfile from "./user/pages/myprofile/MyProfile";
import MyPropertyDetails from "./user/pages/myprofile/MyPropertyDetails";
import OwnerHomepage from "./owner/pages/Homepage";
import AdminHomepage from "./admin/pages/Homepage";
import Ownerlist from "./admin/pages/Ownerlist";
import Amenitylist from "./admin/pages/Amenitylist";
import PaymentList from "./user/pages/myprofile/PaymentList";
import OwnerProtectedRoute from "./ProtectedRoutes/OwnerProtectedRoute";
import AdminProtectedRoute from "./ProtectedRoutes/AdminProtectedRoute";
const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={hist}>
      <Switch>
        <Route exact path="/mypropertydetails" component={MyPropertyDetails} />
        <Route exact path="/property-details/:id" component={PropertyDetails} />
        <Route exact path="/property-list" component={PropertyList} />
        <Route exact path="/payment-list" component={PaymentList} />
        <Route path="/owner-home" component={OwnerHomepage} />

        <OwnerProtectedRoute
          exact
          path="/tenant-list"
          component={Ownertenantlist}
        />
        <OwnerProtectedRoute
          exact
          path="/owner-property-list"
          component={Ownerpropertylist}
        />
        <OwnerProtectedRoute
          exact
          path="/owner-complaint-list"
          component={Ownercomplaintlist}
        />

        <Route exact path="/admin-home" component={AdminHomepage} />
        <AdminProtectedRoute exact path="/owner-list" component={Ownerlist} />
        <AdminProtectedRoute
          exact
          path="/amenity-list"
          component={Amenitylist}
        />

        <Route exact path="/myprofile" component={MyProfile} />
        <Route exact path="/paymenthistory" component={Userpaymenthistory} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
