import React from 'react'
import { useNavigate } from 'react-router-dom'

function JieShao() {
    const navigate = useNavigate()
    return (
        <>
            <div>我是关于的简洁，大撒大撒大撒空间大深刻理解打死了</div>
            <button onClick={() => navigate('/')}>go Home</button>
        </>
    )
}

export default JieShao