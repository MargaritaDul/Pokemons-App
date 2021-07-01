import { Switch, Route } from "react-router-dom";

import SignUpPageContainer from "../pages/SignUpPage/containers/SignUpPageContainer";
import LogInPageContainer from "../pages/LogInPage/containers/LogInPageContainer";
import PokemonsPageContainer from "../pages/PokemonsPage/containers/PokemonsPageContainer";
import PokemonsDetailsPageContainer from "../pages/PokemonsDetailsPage/containers/PokemonsDetailsPageContainer";
import PrivateRoute from "./PrivateRoute";
import CartPageContainer from "../pages/CartPage/containers/CartPageContainer";

import { ROUTES } from "./routeNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.SIGNUP_PAGE} component={SignUpPageContainer} />
      <Route exact path={ROUTES.LOGIN_PAGE} component={LogInPageContainer} />
      <Route
        exact
        path={ROUTES.POKEMONS_PAGE}
        component={PokemonsPageContainer}
      />
      <PrivateRoute
        exact
        path={ROUTES.POKEMONS_DETAILS}
        component={PokemonsDetailsPageContainer}
      />
      <PrivateRoute
        exact
        path={ROUTES.POKEMONS_DETAILS}
        component={PokemonsDetailsPageContainer}
      />
      <PrivateRoute
        exact
        path={ROUTES.CART_PAGE}
        component={CartPageContainer}
      />
    </Switch>
  );
};

export default Routes;
