import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  totalPrice: 0,
  quantity: 0,
  itemsList: [],
  errors: null,
  isLoading: false,
};

const cartReducer = handleActions(
  {
    [actions.CART_REQUEST]: (state) => ({
      ...state,
    }),

    [actions.CART_SUCCESS]: (state, { payload }) => {
      const { itemsList, quantity, totalPrice } = payload.response;
      return {
        ...state,
        itemsList,
        quantity,
        totalPrice,
      };
    },

    [actions.CART_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);

export default cartReducer;
