import React from "react";
import { actionCreators } from '../../models/actions/changeDemo';
import { useDispatch } from "react-redux";
import "./style.less";
import { Button } from "antd";
const Index = () => {
  const dispatch = useDispatch();
  const onGlobalCliked = React.useCallback(() => {
    // dva
    // dispatch({
    //   type: 'UPDATE_NODE',
    //   text: 2,
    // })
    // 只做传参操作，不需要dispatch
    dispatch(actionCreators.updateNote({
      id: 1,
      text: 'global'
    }));
  }, []);

  return <div className="test-c">D页面显示共享数据
    <div>
      <Button type="primary" onClick={onGlobalCliked}>点击即可共享Global数据</Button>
    </div>
  </div>;
};

export default Index;
