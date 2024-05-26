import { createStore, combineReducers } from "redux";
import { accountBalanceReducer } from "../reducer";

export const store = createStore(
  //here we are defining our state
  combineReducers({
    accountBalance: accountBalanceReducer,
  })
);
