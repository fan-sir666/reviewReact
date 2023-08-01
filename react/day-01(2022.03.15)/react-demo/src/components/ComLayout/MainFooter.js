import React, { useState } from 'react'
import MainFooterStyles from "./MainFooter.module.css"
import classNames from "classnames";
function MainFooter() {
    const [falg,setFalg] = useState(false)
    // const toggle = ()=>{
    //     setFalg(!falg)
    // }
    return (
        <div className={classNames(MainFooterStyles.box, { [MainFooterStyles.active]: falg })} onMouseEnter={() => setFalg(!falg)} onMouseLeave={() => setFalg(!falg) }>我是页面底部</div>
    )
}

export default MainFooter