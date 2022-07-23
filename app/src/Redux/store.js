import { applyMiddleware, combineReducers, legacy_createStore,compose  } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";





export const rootReducer= combineReducers({ 
    data:reducer,


    
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(
    rootReducer,composeEnhancers(applyMiddleware(thunk))
)


