import { Switch, Route } from "react-router-dom";

import SignUpPageContainer from "../pages/SignUpPage/containers/SingUpPageContainer";

import { ROUTES } from "./routeNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.SINGUP_PAGE} component={SignUpPageContainer} />
    </Switch>
  );
};

export default Routes;
