import * as signupActions from "../modules/SingUp/actions";
import * as signupAPI from "../modules/SingUp/api";

import * as loginActions from "../modules/Login/actions";
import * as loginAPI from "../modules/Login/api";

const apiCallsMapping = (action) => {
  const mapping = {
    [signupActions.SIGN_UP_REQUEST]: signupAPI.signUp,

    [loginActions.SIGN_IN_REQUEST]: loginAPI.signIn,
  };

  if (!mapping.hasOwnProperty(action.type)) {
    throw "Not mapped action";
  }

  return mapping[action.type];
};

export default apiCallsMapping;
