import React, { Component } from "react";

export default class Count extends Component {
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
