import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  itemsList: [],
  isLoading: false,
  errors: null,
};

const getPokemonsReducer = handleActions(
  {
    [actions.GET_POKEMONS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_POKEMONS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      itemsList: payload.response,
    }),
    [actions.GET_POKEMONS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);

export default getPokemonsReducer;
