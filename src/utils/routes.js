import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HttpError from "@src/components/http-error";

/**
 * 渲染路由
 * @param {[{path:string, exact?:boolean, Component:Object, from?:string, to?:string}]} list
 */
const getRoutes = (list) => {
  const routeList = list.map((item) => {
    const { path, exact = true, Component, from, to } = item;
    if (from) {
      return <Redirect key={to} from={from} to={to} />;
    }
    return (
      <Route
        exact={exact}
        key={path}
        path={path}
        component={() => <Component />}
      />
    );
  });
  routeList.push(<Route key="error" component={() => <HttpError />} />);
  return <Switch errorCode={404}>{routeList}</Switch>;
};
export { getRoutes };
