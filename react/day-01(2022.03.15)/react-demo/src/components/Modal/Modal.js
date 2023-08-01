import React from 'react'
import ReactDOM from "react-dom";
import styles from './Modal.module.css'


function Modal(props) {
    return ReactDOM.createPortal(
        <div className={styles.box}>
            <div>主题区域<i onClick={() => props.tab()}>关闭</i></div>
        </div>,
        document.getElementById('portal-root')
    )
}

export default Modal