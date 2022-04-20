import { createStore, combineReducers, applyMiddleware } from "redux";
import allNewReducer from "./reducers/reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const reducers = combineReducers({
  news: allNewReducer,
});

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
