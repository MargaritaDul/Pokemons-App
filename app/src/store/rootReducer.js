import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import signUp from "../modules/SingUp/reducers";
import auth from "../modules/Login/reducers";

const rootReducer = combineReducers({ signUp, auth });

const signupBlackListedFields = createBlacklistFilter("signUp", [
  "isLoading",
  "errors",
]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["signUp", "auth"],
  transforms: [signupBlackListedFields],
};

export default persistReducer(persistConfig, rootReducer);
