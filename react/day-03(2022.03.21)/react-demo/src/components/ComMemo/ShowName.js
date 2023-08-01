import { memo, useEffect } from "react";

// memo 方法内部采用的是浅层比较，比较基本数据类型的值是否相同，比较引用类型是否为相同的引用地址
function ShowName({ name, person: { username } }) {
    useEffect(() => {
        console.log("子组件渲染了");
    });
    return (
        <div>
            <h1>{name}</h1>
            <span>{username}</span>
        </div>
    )
}

// 将子组件用memo钩子 返回组件
export default memo(ShowName, compareFunction);

function compareFunction(prevProps, nextProps) {
    // 判断两次是否相等
    if (prevProps.person.name === nextProps.person.name) {
        return true;
    }
    return false;
}