import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import "./style.less";

const Index = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const add = useCallback(() => {
    dispatch({ type: 'INCREMENT' });
  }, []);

  const min = useCallback(() => {
    dispatch({ type: 'DECREMENT' });
  }, [])

  return <div className="test-a">
    共享数据（demo）{store.demo}
    <div>
      <Button type="primary" onClick={add} style={{ marginRight: '16px' }}>ADD</Button>
      <Button type="primary" onClick={min}>ADD</Button>
    </div>
  </div >;
};

export default Index;
