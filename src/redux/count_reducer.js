//初始化state
const initState = 0;

//create a reducer--function
//接收两个参数：previou state 和 action
//只做最简单的判断
export default function countReducer(preState = initState, action) {
  //get type and data from action obj
  //if (preState === undefined) preState = 0;
  const { type, data } = action;

  switch (type) {
    case "increment":
      return preState + data;
    case "decrement":
      return preState - data;
    default:
      return preState;
  }
}
