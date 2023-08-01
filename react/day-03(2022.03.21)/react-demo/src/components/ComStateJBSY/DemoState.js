import React, { useState } from 'react'

function DemoState() {
    //  React.useState 用于声明组件状态数据，可以在组件中多次被调用来声明多个状态数据
    const [username] = useState('张三')
    // let inialState = 0;
    // for (let i = 0; i < 100; i++) {
    //     console.log(11111);
    //     inialState += i;
    // }
    // const [age, setAge] = useState(inialState)

    // 上面的代码 状态初始值只在组件初始渲染时用到， 每次状态更改都会执行 inialState赋值和循环 导致组件性能变差
    // 我们使用初始状态函数，因为初始状态函数只会被调用一次
    const [age, setAge] = useState(() => {
        let inialState = 0;
        for (let i = 0; i < 100; i++) {
            console.log(11111);
            inialState += i;
        }
        return inialState
    })
    return (
        <div>
            <h3>我叫{username},今年{age}岁了!</h3>
            <button onClick={() => setAge((num) => num + 1)}>点击长一岁</button>
        </div>
    )
}

export default DemoState