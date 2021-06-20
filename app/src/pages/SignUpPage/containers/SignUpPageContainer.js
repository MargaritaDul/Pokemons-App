import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignUpPageLayout from "../components/SignUpPageLayout";
import { SIGN_UP_REQUEST } from "../../../modules/SingUp/actions";
import useForm from "../../../hooks/useForm";

const SignUpPageContainer = () => {
  const dispatch = useDispatch();

  const { success } = useSelector((state) => state.signUp);

  const [signUpValues, setSignUpValues] = useForm({
    email: "",
    firstName: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      addressLine1: "",
      addressLine2: "",
    },
    gender: "",
    password: "",
    phone: "",
  });

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
      setSignUpValues={setSignUpValues}
      success={success}
    />
  );
};

export default SignUpPageContainer;
