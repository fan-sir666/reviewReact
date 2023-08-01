import { useEffect, useMemo, useState } from "react";

function UseMemo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    // useMemo 缓存值 只有在依赖状态改变时 返回一个处理后的新值
    const double = useMemo(() => {
        return slowFunction(number);
    }, [number]);
    const styles = useMemo(() => {
        return {
            background: dark ? "black" : "white",
            color: dark ? "white" : "black",
        };
    }, [dark]);
    useEffect(() => {
        console.log("styles");
    }, [styles]);
    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
            />
            <div style={styles} onClick={() => setDark(!dark)}>
                {double}
            </div>
        </div>
    );
}

function slowFunction(n) {
    for (let i = 0; i < 1000000000; i++) { }
    return n * 2;
}

export default UseMemo;