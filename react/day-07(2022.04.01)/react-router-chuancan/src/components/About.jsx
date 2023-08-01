import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
    // 获取路径参数
    const { mobile } = useParams()
    return (
        <div>
            <h1>联系我们,电话{mobile}</h1>
        </div>
    )
}

export default About