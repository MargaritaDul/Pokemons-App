import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  itemsList: [],
  isLoading: false,
  errors: null,
  currentPage: 1,
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
    [actions.CHANGE_PAGE]: (state, { payload }) => ({
      ...state,
      currentPage: payload,
    }),
  },
  defaultState
);

export default getPokemonsReducer;
