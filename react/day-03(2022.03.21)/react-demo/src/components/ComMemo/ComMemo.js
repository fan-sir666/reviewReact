import { useEffect, useState } from "react";
import ShowName from "./ShowName";

function ComMemo() {
    const [index, setIndex] = useState(0);
    const [name] = useState("张三"); // 基本数据类型
    const [person] = useState({ username: "王五" }); // 复杂数据类型 地址一致
    useEffect(() => {
        const timer = setInterval(() => {
            // 定时器不断修改index状态  但不涉及子组件状态
            setIndex((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <p>{index}</p>
            {/* <ShowName name={name} person={person} /> */}
            {/* 直接对象 地址不一样 浅层比较又造成了子组件的更新  我们需要手动比较 */}
            <ShowName name={name} person={{ username: "张三" }} />
        </>
    );
}

export default ComMemo