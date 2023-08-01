import React from 'react'
import MainNavStyles from './MainNav.module.css'
function MainNav(props) {
  return (
    <div className={MainNavStyles.headNav} onClick={() => props.toggle()}>我是头部导航 点击我可以切换背景颜色</div>
  )
}

export default MainNav