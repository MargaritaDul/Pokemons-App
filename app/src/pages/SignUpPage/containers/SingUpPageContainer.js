import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignUpPageLayout from "../components/SignUpPageLayout";
import { SIGN_UP_REQUEST } from "../../../modules/SingUp/actions";

const SignUpPageContainer = () => {
  const dispatch = useDispatch();

  const [signUpValues, setSignUpValues] = useState({
    email: "",
    firstName: "",
  });

  const handleFormChange = useCallback(
    (event) => {
      const { value, name, type } = event.target;

      if (type === "checkbox") {
        setSignUpValues({ ...signUpValues, [name]: event.target.checked });
        return;
      }
      setSignUpValues({ ...signUpValues, [name]: value });
    },
    [signUpValues]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(SIGN_UP_REQUEST(signUpValues));
    },
    [dispatch, signUpValues]
  );

  return (
    <SignUpPageLayout
      signUpValues={signUpValues}
      handleSubmit={handleSubmit}
      handleFormChange={handleFormChange}
    />
  );
};

export default SignUpPageContainer;
