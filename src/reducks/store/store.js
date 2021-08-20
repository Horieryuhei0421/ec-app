import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import { ProductsReducer } from "../products/reducers";
import { UserReducer } from "../users/reducers";
import {
  connectRouter, routerMiddleware
} from "connected-react-router";
import thunk from "redux-thunk";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      products: ProductsReducer,
      router: connectRouter(history),
      users: UserReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}