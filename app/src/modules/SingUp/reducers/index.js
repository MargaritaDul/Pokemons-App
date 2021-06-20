import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  success: false,
  isLoading: false,
  errors: null,
  info: {},
};

const signUpReducer = handleActions(
  {
    [actions.SIGN_UP_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.SIGN_UP_SUCCESS]: (state, { payload }) => {
      const { message } = payload.response;
      return { ...state, isLoading: false, success: true, info: message };
    },
    [actions.SIGN_UP_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);

export default signUpReducer;
