//生成container components
import React, { Component } from "react";
//引入connnect用于连接UI和redux
import { connect } from "react-redux";
//引入action-creator
import {
  createIncrement,
  createDecrement,
  createIncrementAsync,
} from "../../redux/actions/count";

class CountUI extends Component {
  //在挂载之后再检测
  // componentDidMount(){
  //     //检测redux状态变化，只要变化就调用render
  //     //只要redux里任何状态改变 都会调用suscribe
  //     store.subscribe(()=>{
  //         this.setState({});
  //     })
  // }

  incrementNum = () => {
    const { value } = this.selectedNum;
    this.props.increment(value * 1);
  };

  decrementNum = () => {
    const { value } = this.selectedNum;
    this.props.decrement(value * 1);
  };

  oddIncrement = () => {
    const { value } = this.selectedNum;
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  };

  incrementAsync = () => {
    const { value } = this.selectedNum;
    this.props.incrementasync(value * 1, 1000);
  };

  render() {
    return (
      <div>
        {/* getstate会调用reducer */}
        <h2>Result is : {this.props.count}</h2>
        <h2>List length is: {this.props.length}</h2>
        <select ref={(c) => (this.selectedNum = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.incrementNum}>+</button>
        <button onClick={this.decrementNum}>-</button>
        <button onClick={this.oddIncrement}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    );
  }
}



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
  (state) => ({ count: state.count, length: state.person.length }),
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
