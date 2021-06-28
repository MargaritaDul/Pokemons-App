import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  totalPrice: 0,
  quantity: 0,
  customerId: "",
  itemsList: [],
  errors: null,
  isLoading: false,
};

const addPokemonReducer = handleActions(
  {
    [actions.ADD_POKEMON_REQUEST]: (state) => ({
      ...state,
    }),
  },
  {
    [actions.ADD_POKEMON_SUCCESS]: (state, { payload }) => {
      const { itemsList, customerId, quantity, totalPrice } = payload.response;
      return {
        ...state,
        itemsList,
        customerId,
        quantity,
        totalPrice,
      };
    },
  },
  {
    [actions.ADD_POKEMON_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);

export default addPokemonReducer;
