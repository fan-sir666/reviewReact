import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Detail() {
    // 获取查询参数
    const [searchParams] = useSearchParams()
    // console.log(searchParams.get('name'));
    // console.log(searchParams.get('age'));
    // console.log(searchParams.getAll('hobby'));
    return (
        <div>
            <h1>详情</h1>
            <p>我叫{searchParams.get('name')},今年{searchParams.get('age')}</p>
            <h5>爱好</h5>
            {searchParams.getAll('hobby').map(item => (<span key={item}>{item}</span>))}
        </div>
    )
}

export default Detail