import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

function UseEffect() {
    // 组件初始渲染后执行, 特定状态发生变化后执行
    // 第一个参数是函数类型, 监听的状态发生变化后该回调函数被执行
    // 第二个参数是数组类型, 数组中填写的是要监听的状态 空数组只执行一次

    const [flag, setFlag] = useState(true)
    const [formState, setFormState] = useState({
        username: '',
        biography: ''
    })
    const lyrHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        flag ? alert('请输入留言人') : alert('留言人成功')
    }, [flag])

    // 初始化只执行一次
    useEffect(async () => {
        const { data } = await axios.get("https://api.github.com/users/defunkt");
        console.log(data);
    }, [])

    // 组件卸载前执行的清理  ()=>{return()=>xxx}
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('我被开启了定时器')
        }, 1000);
        return () => clearInterval(timer);
    }, [])
    
    return (
        <>
            <div>
                {flag ? <input type="text" name='username' value={formState.username} onChange={lyrHandler} onBlur={() => setFlag(!flag)} /> : (<span onClick={() => setFlag(!flag)}>{formState.username}:留言</span>)}
            </div>
            <textarea name='biography' value={formState.biography} onChange={lyrHandler} />
            <button onClick={() => ReactDOM.unmountComponentAtNode(document.getElementById("root"))}>卸载组件</button>
        </>
    )
}

export default UseEffect