import React, { Fragment } from 'react'
// import AppContainer from "./components/ComLayout/AppContainer"
// import Person from './components/DefaultProps/Person'
// import Moban from './components/ChildrenCom/Moban'
import Modal from './components/Modal/Modal'
function App() {
  const [flag, setFlag] = React.useState(false)
  const toggle = () => {
    setFlag(!flag)
  }
  return (
    <Fragment>
      {/* 1. 体会组件布局 */}
      {/* <AppContainer></AppContainer> */}

      {/* 2. 函数组件 props参数 及 默认值设置 */}
      {/* <Person msg={{ name: '张三', age: 28 }}></Person>
      <Person></Person> */}

      {/* 3. react 的children 插槽的功能 */}
      {/* <Moban>
        我是插槽1的内容
      </Moban>
      <Moban>
        <h1>标题</h1>
        <p>来了老弟,好嗨呦!!!</p>
      </Moban> */}

      {/* 传送门组件 ReactDOM.createPortal 参数 ①渲染的结构 ②渲染的位置  */}
      {/* 默认遮罩层基于浏览器固定定位 父级有了transform 基于浏览器定位了  解决使用createPortal */}
      <div style={{ width: 600, transform: "translate(0%, 0%)" }}>
        <button onClick={toggle}>点击出现弹框</button>
        {flag ? <Modal tab={toggle} /> : ''}
      </div>
    </Fragment>
  )
}

export default App