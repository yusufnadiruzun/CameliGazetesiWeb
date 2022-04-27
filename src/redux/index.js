import { createStore, combineReducers, applyMiddleware } from "redux";
import allNewReducer from "./reducers/reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const reducers = combineReducers({
  result: allNewReducer,
});

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
