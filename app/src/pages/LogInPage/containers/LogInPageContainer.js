import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import LogInPageLayout from "../components/LogInPageLayout";
import { SIGN_IN_REQUEST } from "../../../modules/Login/actions";
import useForm from "../../../hooks/useForm";
import { ROUTES } from "../../../routes/routeNames";

const LogInPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuth } = useSelector((state) => state.auth);
  const [logInValues, setLogInValues] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(SIGN_IN_REQUEST(logInValues));
    },
    [dispatch, logInValues]
  );

  useEffect(() => {
    if (isAuth) {
      history.push(ROUTES.POKEMONS_PAGE);
    }
  }, [isAuth]);

  return (
    <LogInPageLayout
      logInValues={logInValues}
      handleSubmit={handleSubmit}
      setLogInValues={setLogInValues}
    />
  );
};

export default LogInPageContainer;
