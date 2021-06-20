import { Switch, Route } from "react-router-dom";

import SignUpPageContainer from "../pages/SignUpPage/containers/SignUpPageContainer";
import LogInPageContainer from "../pages/LogInPage/containers/LogInPageContainer";

import { ROUTES } from "./routeNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.SIGNUP_PAGE} component={SignUpPageContainer} />
      <Route exact path={ROUTES.LOGIN_PAGE} component={LogInPageContainer} />
    </Switch>
  );
};

export default Routes;
