import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";

export const rootReducer = combineReducers({
  AppReducer,
  AuthReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
