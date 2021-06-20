import * as signupActions from "../modules/SingUp/actions";
import * as signupAPI from "../modules/SingUp/api";

const apiCallsMapping = (action) => {
  const mapping = {
    [signupActions.SIGN_UP_REQUEST]: signupAPI.signUp,
  };

  if (!mapping.hasOwnProperty(action.type)) {
    throw "Not mapped action";
  }

  return mapping[action.type];
};

export default apiCallsMapping;
