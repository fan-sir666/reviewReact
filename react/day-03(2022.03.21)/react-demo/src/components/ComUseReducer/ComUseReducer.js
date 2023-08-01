import React, { useEffect, useReducer } from 'react'
import { reducer } from './reduce'
/* 
   action 对象：用于描述对组件状态进行怎样的操作。

   dispatch 方法：用于触发对状态的操作，接收 action 对象作为参数。

   reducer 方法：用于对状态进行集中操作的地方，返回操作之后的最新状态。
   */

function ComUseReducer() {
    // 参数① reducer 参数② 初始值
    // const [count, dispatch] = useReducer(reducer, 0)

    // 假如有处理初始状态值的情况 模块化在reducerjs文件中处理 使用默认值方式
    // 但需要初始调用一次dispatch
    const [count, dispatch] = useReducer(reducer)
    useEffect(() => {
        dispatch({ type: 'init' })
    }, [])
    
    return (
        <>
            <button onClick={() => dispatch({ type: "increment" })}>{count}</button>
            <button onClick={() => dispatch({ type: "decrement" })}>{count}</button>
        </>
    );
}

export default ComUseReducer