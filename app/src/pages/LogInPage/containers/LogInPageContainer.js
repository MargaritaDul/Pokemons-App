import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import LogInPageLayout from "../components/LogInPageLayout";
import { SIGN_IN_REQUEST } from "../actions";
import useForm from "../../../hooks/useForm";
import { ROUTES } from "../../../routes/routeNames";

const LogInPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuth, errors, isLoading } = useSelector((state) => state.auth);
  const [logInValues, setLogInValues, handleReset] = useForm({
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

  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (typeof errors === "string") {
      handleReset();
    }
  }, [errors]);

  return (
    <LogInPageLayout
      logInValues={logInValues}
      handleSubmit={handleSubmit}
      setLogInValues={setLogInValues}
      errors={errors}
      open={open}
      handleClick={handleClick}
      handleClose={handleClose}
      handleLoginReset={handleReset}
    />
  );
};

export default LogInPageContainer;
