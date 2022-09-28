import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import filtersReducer from "./reducers/filters";
import productsReducer from "./reducers/products";
import cartReducer from "./reducers/cart";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  filters: filtersReducer,
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
