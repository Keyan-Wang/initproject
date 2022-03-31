import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import * as Demo from './demo';
import * as ChangeDemo from './changeDemo';
// todo: 可抽离公共的reducer
// import * as Generic from './generic';

export function configureStore(initialState) {
  const reducers = {
    // generic: Generic.reducer,
    demo: Demo.reducer,
    globalChange: ChangeDemo.reducer,
  };

  const middleware = [thunk];

  // In development, use the browser's Redux dev tools extension if installed
  // const enhancers = [];
  // const isDevelopment = process.env.NODE_ENV === "development";
  // if (
  //   isDevelopment &&
  //   typeof window !== "undefined" &&
  //   window.devToolsExtension
  // ) {
  //   console.log(1);
  //   enhancers.push(window.devToolsExtension());
  // }

  const rootReducer = combineReducers({
    ...reducers,
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
    // compose(applyMiddleware(...middleware), ...enhancers)
  );
}
