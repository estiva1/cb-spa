import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
  Middleware,
} from "redux";
import logger from "redux-logger";
//import { loggerMiddleware } from "./middleware/logger";

import createSagaMiddleware from "@redux-saga/core";

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV !== "production" && logger, // logger -> loggerMiddleware
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware)); //or loggerMiddleware (include import above)

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
