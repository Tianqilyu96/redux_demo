//生成container components
//import UI components
import CountUI from "../../components/Count";
//在上一层用props引入store
//引入connnect用于连接UI和redux
import { connect } from "react-redux";
//引入action-creator
import {
  createIncrement,
  createDecrement,
  createIncrementAsync,
} from "../../redux/count_creator";

//将state作为return，作为props传递给UI component,必须是key-value对象，value是state
//react-redux调用function时会接收state参数
function mapStateToProps(state) {
  return { count: state };
}

//将actions传递给UI, 必须是key-value对象,value是action
//react-redux调用function时会接收dispatch
function mapDispatchToProps(dispatch) {
  return {
    increment: (number) => {
      dispatch(createIncrement(number));
    },
    decrement: (number) => {
      dispatch(createDecrement(number));
    },
    incrementasync: (number,time) => {
      dispatch(createIncrementAsync(number,time));
    },
  };
}

//使用connect创建并export一个container component
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
