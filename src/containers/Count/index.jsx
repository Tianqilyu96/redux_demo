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

//将state传递给UI component
// const mapStateToProps = (state) => {
//   return { count: state };
// };

//将actions传递给UI
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (number) => dispatch(createIncrement(number)),
//     decrement: (number) => dispatch(createDecrement(number)),
//     incrementasync: (number, time) =>
//       dispatch(createIncrementAsync(number, time)),
//   };
// };

//使用connect创建并export一个container component
export default connect(
  (state) => ({ count: state }),
//mapDispatchToProps一般写法
//   (dispatch) => ({
//     increment: (number) => dispatch(createIncrement(number)),
//     decrement: (number) => dispatch(createDecrement(number)),
//     incrementasync: (number, time) =>
//       dispatch(createIncrementAsync(number, time)),
//   })

//精简写法 react-redux会自动dispatch
{
    increment: createIncrement,
    decrement: createDecrement,
    incrementasync: createIncrementAsync,
}

)(CountUI);
