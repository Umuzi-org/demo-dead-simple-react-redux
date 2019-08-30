// store.js

import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";

import reducer from "./redux-reducers.js";

// when creating a redux store you have to give it a REDUCER. We also applied a middleware that makes logging look good.
const store = createStore(reducer, applyMiddleware(logger));

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENsadasdsadasT" });
store.dispatch({ type: "ADD_TODO", heading: "foo1", description: "bar" });
store.dispatch({ type: "ADD_TODO", heading: "foo2", description: "bar" });
store.dispatch({ type: "ADD_TODO", heading: "foo3", description: "bar" });
store.dispatch({ type: "ADD_TODO", heading: "foo4", description: "bar" });

export default store;
