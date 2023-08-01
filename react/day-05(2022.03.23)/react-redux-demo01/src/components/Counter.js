import React from 'react'
import { useSelector } from "react-redux"
import { useActions } from '../state'
function Counter() {
    // 获取状态
    const count = useSelector((state) => state.counter.count)
    const { addNum, minusNum } = useActions()
    return (
        <div>
            <button onClick={()=>addNum(5)}>点击 + 5</button>
            <button onClick={()=>minusNum(1)}>点击 - 1</button>
            <p>{count}</p>
        </div>
    )
}

export default Counter