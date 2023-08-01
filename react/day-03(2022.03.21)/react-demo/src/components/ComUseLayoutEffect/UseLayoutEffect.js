import React, { useLayoutEffect, useRef, useState } from 'react'

function UseLayoutEffect() {
    const [isShow, setIsShow] = useState(false);
    const divRef = useRef();
    // 此处如果使用 useEffect 就是出现元素闪烁问题
    // 就是元素先出现在原始位置, 再出现在目标位置
    useLayoutEffect(() => {
        if (!divRef.current) return;
        divRef.current.style.top = "100px";
    }, [isShow]);
    return (
        <>
            <button onClick={() => setIsShow(!isShow)}>button</button>
            {isShow ? (
                <div ref={divRef} style={{ position: "absolute" }}>
                    div
                </div>
            ) : null}
        </>
    );
}

export default UseLayoutEffect