import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth/authReducer";
import { calculatorReducer } from "./calculator/calculator";

const rootReducer = combineReducers({
  calculate: calculatorReducer,
  auth: authReducer, 
});

export const store = createStore(rootReducer);


