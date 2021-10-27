import { INCREMENT, DECREMENT } from "./constant";
//为count组件生成action对象
export const createIncrement = (data) => ({ type: INCREMENT, data });

export const createDecrement = (data) => ({ type: DECREMENT, data });
