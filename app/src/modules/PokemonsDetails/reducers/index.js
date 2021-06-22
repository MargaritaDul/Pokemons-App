import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  item: "",
  isLoading: false,
  errors: null,
};

const getPokemonsDetailsReducer = handleActions(
  {
    [actions.GET_POKEMONS_DETAILS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_POKEMONS_DETAILS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      itemsList: payload.response,
    }),
    [actions.GET_POKEMONS_DETAILS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);

export default getPokemonsDetailsReducer;
