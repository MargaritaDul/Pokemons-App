import { useCallback } from "react";
import { useDispatch } from "react-redux";
import LogInPageLayout from "../components/LogInPageLayout";
import { SIGN_IN_REQUEST } from "../../../modules/Login/actions";
import useForm from "../../../hooks/useForm";

const LogInPageContainer = () => {
  const dispatch = useDispatch();

  const [logInValues, setLogInValues] = useForm({
    email: "",
    firstName: "",
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(SIGN_IN_REQUEST(logInValues));
    },
    [dispatch, logInValues]
  );

  return (
    <LogInPageLayout
      logInValues={logInValues}
      handleSubmit={handleSubmit}
      setLogInValues={setLogInValues}
    />
  );
};

export default LogInPageContainer;
