import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

import { ROUTES } from "./routeNames";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? <Redirect to={ROUTES.LOGIN_PAGE} /> : <Component {...props} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default PrivateRoute;
