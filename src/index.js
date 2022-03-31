// Base css, this need to be imported first
import "antd/dist/antd.css";
// React
import React from "react";
import ReactDOM from "react-dom";
// Redux
import { Provider } from 'react-redux';
import { configureStore } from './models/reducers/configureStore';
// Router
import { BrowserRouter } from "react-router-dom";
import { getRoutes } from "@src/utils/routes";
import routerList from "@src/config/index-router";
/// comon css
import "./style/index.less";

const store = configureStore();
// need init redux

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>{getRoutes(routerList)}</BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);
