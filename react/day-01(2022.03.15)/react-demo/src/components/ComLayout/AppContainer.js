import React, { useState } from 'react'
import MainNav from "./MainNav"
import SidebarNav from "./SidebarNav"
import Content from "./Content"
import MainFooter from "./MainFooter"
import styles from "./AppContainer.module.css";
function AppContainer() {
    const [state, setState] = useState({
        colors: ["palevioletred", "yellow", "papayawhip"],
        index: 0,
    })
    const boxBackground = {
        background: state.colors[state.index],
    };

    const clickHandler = ()=>{
        setState({
            ...state,
            index: state.index >= state.colors.length - 1 ? 0 : state.index + 1
        })
    }
    return (
        //  布局组件
        <div className={styles.box} style={boxBackground} >
            <MainNav toggle={clickHandler}/>
            <div className={styles.box_main}>
                <SidebarNav />
                <Content />
            </div>
            <MainFooter></MainFooter>
        </div>
    )
}

export default AppContainer