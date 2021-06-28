import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import signUp from "../pages/SignUpPage/reducers";
import auth from "../modules/Login/reducers";
import getPokemons from "../pages/PokemonsPage/reducers";
import getPokemonsDetails from "../pages/PokemonsDetailsPage/reducers";
import addPokemon from "../modules/Cart/reducers";

const rootReducer = combineReducers({
  signUp,
  auth,
  getPokemons,
  getPokemonsDetails,
  addPokemon,
});

const signupBlackListedFields = createBlacklistFilter("signUp", [
  "isLoading",
  "errors",
]);

const authBlackListedFields = createBlacklistFilter("auth", [
  "isLoading",
  "errors",
]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["signUp", "auth"],
  transforms: [signupBlackListedFields, authBlackListedFields],
};

export default persistReducer(persistConfig, rootReducer);
