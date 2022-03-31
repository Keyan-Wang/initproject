import React from "react";
import { Layout } from "antd";
import "./style.less";

const { Header } = Layout;

const Index = () => {
  return (
    <Header>
      <div className="app-header">
        <div>left</div>
        <div>right</div>
      </div>
    </Header>
  );
};

export default Index;
