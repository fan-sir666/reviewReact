import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../state'
function Message() {
    const inputRef = useRef()
    const message = useSelector((state) => state.message.msg)
    const { saveMsg } = useActions()
    const saveHandler = (val) => {
        if (val.trim().length > 0) {
            saveMsg(val)
            inputRef.current.value = ''
        }
    }
    return (
        <div>
            <input type='text' ref={inputRef} />
            <button onClick={() => saveHandler(inputRef.current.value)}>提交</button>
            <h3>{message}</h3>
        </div>
    )
}

export default Message