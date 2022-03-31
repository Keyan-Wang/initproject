import React from "react";
import { useSelector } from "react-redux";
import "./style.less";

const Index = () => {
  const store = useSelector(state => state);
  return <div className="test-b">
    共享数据（demo）{store.demo}
  </div >;
};

export default Index;
