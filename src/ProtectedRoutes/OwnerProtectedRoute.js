import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import UserSelector from "../user/helpers/UserSelector";
import userActions from "../redux-store/actions/userActions";

export function OwnerProtectedRoute(props) {
  const Component = props.component;
  const render = props.render;

  const user = props.user;

  return (
    <Route
      render={(props) => {
        if (user && user.role === "owner")
          return Component ? <Component {...props} /> : render(props);

        return (
          <Redirect
            to={{
              pathname: "/owner-home",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}

const mapStateToProps = (state) => {
  const userSelector = UserSelector(state.user);

  return {
    user: userSelector.getUserData().data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (payload) => dispatch(userActions.getUser(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OwnerProtectedRoute);
