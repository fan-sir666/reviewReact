import React, { useEffect, useRef, useState } from 'react'

function ComUseRef() {
    const [text, setText] = useState("");
    // 使用useState来记录 会造成死循环
    // const [count, setCount] = useState(0)
    // useEffect(() => {
    //     return setCount(count + 1);
    // });
    // const renderCount = useRef(1);
    // useEffect(() => {
    //     renderCount.current += 1;
    // });
    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <h3>{renderCount.current}</h3>
        </div>
    )
}

export default ComUseRef