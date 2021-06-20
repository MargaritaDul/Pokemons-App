import { combineReducers } from "redux";

import toDoListManager from "../pages/To-DoList/reducers";
import auth from "../modules/Login/reducers";

const rootReducer = combineReducers({ toDoListManager, auth });

export default rootReducer;
