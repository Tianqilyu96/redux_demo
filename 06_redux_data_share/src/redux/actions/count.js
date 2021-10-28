import { INCREMENT, DECREMENT } from "../constant";
//为count组件生成action对象
export const createIncrement = (data) => ({ type: INCREMENT, data });

export const createDecrement = (data) => ({ type: DECREMENT, data });

//Async action就是指返回一个action function而不是actiion object
//会接收到store调用的dispatch
export const createIncrementAsync = (data,time) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrement(data))
        },time)
    }
}
