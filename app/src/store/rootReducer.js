import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import signUp from "../modules/SingUp/reducers";
import auth from "../modules/Login/reducers";
import getPokemons from "../modules/PokemonsList/reducers";
import getPokemonsDetails from "../modules/PokemonsDetails/reducers";

const rootReducer = combineReducers({
  signUp,
  auth,
  getPokemons,
  getPokemonsDetails,
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
