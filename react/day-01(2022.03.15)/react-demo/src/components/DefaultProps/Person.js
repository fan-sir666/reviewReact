import React from 'react'

function Person(props) {
    return (
        <div>我叫{props.msg.name},今年{props.msg.age}岁了</div>
    )
}

// 设置默认值可防止 组件内部代码执行，在使用组件时未传值报错
Person.defaultProps = {
    msg: {}
}

export default Person