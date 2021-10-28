import { ADD_PERSON } from "../constant";

//在reducer初始化状态-person array
const initState = [];

export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
