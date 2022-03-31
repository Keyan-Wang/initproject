import App from "@src/App";
import Login from "@src/pages/login";

export default [
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    exact: false,
    Component: App,
  },
];
