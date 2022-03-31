import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { menuList } from "@src/config/menu-config";
import "./style.less";

const { SubMenu } = Menu;

const defaultKeys = menuList[0].child
  ? menuList[0].child[0].route
  : menuList[0].route;

const Index = () => {
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(defaultKeys);
  const hisroty = useHistory();
  const location = useLocation();

  useEffect(() => {
    const defaultOpenKey = [];
    // 进入首页跳转第一项菜单
    if (location.pathname === "/") {
      hisroty.push("/test1/testA");
      defaultOpenKey.push("/test1");
    } else {
      location.pathname.split("/").forEach((item, index) => {
        if (!item) return;
        defaultOpenKey.push(`${defaultOpenKey[index - 2] || ""}/${item}`);
      });
    }

    setOpenKeys(defaultOpenKey);
    setSelectedKeys(location.pathname);
  }, [location]);

  const onSelect = (value) => {
    setOpenKeys(value.keyPath);
    setSelectedKeys(value.key);
  };

  const onPush = (route) => {
    hisroty.push(route);
  };

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  // 获取菜单
  const getMenu = (list, path = "") => {
    return list.map((menu) => {
      if (menu.child && menu.child.length) {
        return (
          <SubMenu icon={menu.icon} key={path + menu.route} title={menu.name}>
            {getMenu(menu.child, path + menu.route)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          key={path + menu.route}
          icon={menu.icon}
          onClick={() => {
            onPush(path + menu.route);
          }}
        >
          {menu.name}
        </Menu.Item>
      );
    });
  };

  return (
    <Menu
      mode="inline"
      style={{
        background: "transparent",
        color: "#cecece",
      }}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={onOpenChange}
      onSelect={onSelect}
    >
      {getMenu(menuList)}
    </Menu>
  );
};

export default Index;
