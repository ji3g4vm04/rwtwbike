import { compose,createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  Reducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store;