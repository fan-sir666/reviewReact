import React, { useEffect, useState } from 'react'

function DemoState() {
    const [count, setCount] = useState(0);
    const onClickHandler = () => {
        setCount(count + 1);
        /* 特性① 状态的异步更新
            调用更新状态函数，此时打印拿到的是更新前的值
            想要拿到罪行的状态值 需要在useEffect中获得
        */
        // console.log(count);

        /* 特性② 状态的覆盖
            多次调用状态更新的方法时，参数类型不是函数，React 内部会进行状态的整体覆盖，即只有最后一次设置生效
        */
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // console.log(count); // 不是+4 而是+1

        /* 特性③ 状态的合并
            当多次调用更新状态的方法时，如果参数是函数类型，React 允许对状态进行合并操作，而不是整体无脑覆盖
            prev 就是上一个更新方法的值
        */
        // setCount((prev) => prev + 1)
        // setCount((prev) => prev + 1)
        // setCount((prev) => prev + 1)
        // console.log(count);
    }
    // useEffect(() => {
    //     console.log(count);
    // })
    return <button onClick={onClickHandler}>{count}</button>;
}

export default DemoState