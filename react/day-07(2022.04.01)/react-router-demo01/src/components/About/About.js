import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function About() {
  return (
    <>
      <div>欢迎来到关于页</div>
      <NavLink to='jieshao'>介绍</NavLink>
      <NavLink to='lianmy'>联系我们</NavLink>
      <Outlet />
    </>
  )
}

export default About