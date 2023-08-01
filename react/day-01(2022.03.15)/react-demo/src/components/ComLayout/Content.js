import React, { Fragment } from 'react'
import ContentStyles from "./Content.module.css"
import FuncA from "./FuncA"
// import FuncB from "./FuncB"
function Content() {
    return (
        <div className={ContentStyles.box}>
            <Fragment>
                <h1>我是主体内容</h1>
                <FuncA>FuncA</FuncA>
                <FuncA>FuncBFuncB</FuncA>
            </Fragment>
        </div>
    )
}

export default Content