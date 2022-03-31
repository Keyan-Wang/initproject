import React from "react";
import { useSelector } from "react-redux";
import "./style.less";

const Index = () => {
  const store = useSelector(state => state.globalChange);
  return <div className="test-d">共享数据: {JSON.stringify(store)}
  </div>;
};

export default Index;
