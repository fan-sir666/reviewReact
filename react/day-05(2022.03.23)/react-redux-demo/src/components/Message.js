import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { useActions } from "../state";
function Message() {
    // inputDOM
    const inputRef = useRef()
    // 状态
    const message = useSelector((state) => state.message.value)
    const { saveMessage } = useActions()
    // 点击
    const onMessageSendHandler = () => {
        if (inputRef.current.value.trim().length > 0) {
            saveMessage(inputRef.current.value)
            inputRef.current.value = '';
        }
    }
    return (
        <>
            <input ref={inputRef} />
            <button onClick={onMessageSendHandler}>send</button>
            <h3>{message}</h3>
        </>
    )
}

export default Message