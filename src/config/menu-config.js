import React from "react";
import {
  MailOutlined,
  AppstoreOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";

export const menuList = [
  {
    name: "共享数据demo",
    icon: <MailOutlined />,
    route: "/test1",
    child: [
      {
        name: "测试路由A",
        route: "/testA",
      },
      {
        name: "测试路由B",
        route: "/testB",
      },
    ],
  },
  {
    name: "共享数据Global",
    icon: <AppstoreOutlined />,
    route: "/test2",
    child: [
      {
        name: "测试路由C",
        route: "/testC",
      },
      {
        name: "测试路由D",
        route: "/testD",
      },
    ],
  },
  {
    name: "test-404",
    icon: <CoffeeOutlined />,
    route: "/test404",
  },
];
