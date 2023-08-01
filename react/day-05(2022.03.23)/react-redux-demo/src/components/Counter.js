import { useSelector } from "react-redux"
import { useActions } from "../state";
function Counter() {

    // 获取状态
    const count = useSelector((state) => state.counter.count)
    const { increment } = useActions()
    return (
        <div>
            <button onClick={() => increment(5)}>按钮 + 5</button>
            <button onClick={() => increment(10)}>按钮 + 10</button>
            {count}
        </div>
    );
}

export default Counter