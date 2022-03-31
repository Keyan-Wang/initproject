import React from "react";
import { Layout } from "antd";
import { getRoutes } from "@src/utils/routes";
import Menu from "@src/components/menu";
import Header from "@src/components/header";
import routerList from "@src/config/content-router";

const { Content, Sider } = Layout;

import "./style/app.less";

function App() {
  return (
    <div className="app">
      <Layout className="app-layout">
        <Sider
          className="app-sider"
          theme="light"
          breakpoint="lg"
          collapsedWidth="0"
          width="240"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="app-logo">logo</div>
          <Menu />
        </Sider>
        <Layout>
          <Header />
          <Content>
            <div className="app-content">{getRoutes(routerList)}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
