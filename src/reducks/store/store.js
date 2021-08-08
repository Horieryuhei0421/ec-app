import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";

import { UserReducer } from "../users/reducers";
import {
  connectRouter, routerMiddleware
} from "connected-react-router";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      user: UserReducer
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  )
}