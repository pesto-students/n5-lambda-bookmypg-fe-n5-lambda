import React, { lazy, Suspense } from "react";
import _env from "dotenv";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux-store/Store";
import Loader from "../src/components/loader/Loader";

const Ownertenantlist = lazy(()=> import("./owner/pages/Tenantlist"));
const Ownerpropertylist = lazy(()=> import("./owner/pages/Propertylist"));
const Ownercomplaintlist = lazy(()=> import("./owner/pages/Complaintlist"));
const OwnerHomepage = lazy(()=> import("./owner/pages/Homepage"));
const AdminHomepage = lazy(()=> import("./admin/pages/Homepage"));
const Ownerlist = lazy(()=> import("./admin/pages/Ownerlist"));
const Amenitylist = lazy(()=> import("./admin/pages/Amenitylist"));
const PaymentList = lazy(()=> import("./user/pages/myprofile/Paymentlist"));
const MyPropertyDetails = lazy(()=> import("./user/pages/myprofile/Mypropertydetails"));
const MyProfile = lazy(()=> import("./user/pages/myprofile/Myprofile"));
const PropertyDetails = lazy(()=> import("./user/pages/Propertydetails"));
const PropertyList = lazy(()=> import("./user/pages/Propertylist"));
const HomePage = lazy(()=> import("./user/pages/Homepage"));
const AboutUs = lazy(()=> import("./user/pages/AboutUs"));
const OwnerProtectedRoute = lazy(()=> import("./ProtectedRoutes/OwnerProtectedRoute"));
const AdminProtectedRoute = lazy(()=> import("./ProtectedRoutes/AdminProtectedRoute"));

const hist = createBrowserHistory();
_env.config();

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loader align="30vh 90vh"/>}>
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
        <Route
          exact
          path="/owner-property-list"
          component={Ownerpropertylist}
        />
        <OwnerProtectedRoute
          exact
          path="/owner-complaint-list"
          component={Ownercomplaintlist}
        />

        <Route path="/admin-home" component={AdminHomepage} />
        <Route exact path="/owner-list" component={Ownerlist} />
        <AdminProtectedRoute
          exact
          path="/amenity-list"
          component={Amenitylist}
        />

        <Route exact path="/myprofile" component={MyProfile} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
