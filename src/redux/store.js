import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import filtersReducer from "./reducers/filters";
import productsReducer from "./reducers/products";
import cartReducer from "./reducers/cart";
import userReducer from "./reducers/userReducer";
import payCardReducer from "./reducers/payCardReducer";

const rootReducer = combineReducers({
  filters: filtersReducer,
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  payCard: payCardReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
