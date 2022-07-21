import { applyMiddleware, combineReducers, legacy_createStore,compose  } from "redux";
import thunk from "redux-thunk";
import { reducer, } from "./reducer";


export const rootReducer= combineReducers({ 
    data:reducer,

 
})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store=legacy_createStore(
    rootReducer,composeEnhancers(applyMiddleware(thunk))
)