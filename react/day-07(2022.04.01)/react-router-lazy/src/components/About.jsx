import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>我是关于页</h1>
            <NavLink to='jieshao'>简介</NavLink>
            <NavLink to='lianmy'>联系我们</NavLink>
            <Outlet/>
        </div>
    )
}

export default About