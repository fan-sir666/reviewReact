import DemoState from "./components/ComStateJBSY/DemoState";
import DemoStateTX from "./components/ComStateTX/DemoState";
import UseEffect from "./components/ComUseEffect/UseEffect";
import ComUseReducer from "./components/ComUseReducer/ComUseReducer";
import UseLayoutEffect from "./components/ComUseLayoutEffect/UseLayoutEffect";
import ComUseRef from "./components/ComUseRef/ComUseRef"
import ComMemo from "./components/ComMemo/ComMemo"
import UseMemo from "./components/ComUseMemo/UseMemo"
import UseCallback from "./components/ComUseCallback/UseCallback"
import Father from "./components/ComUseImperativeHandle/Father"
function App() {
  return (
    <div className="App">
      {/* 组件状态的基本使用 */}
      {/* <DemoState></DemoState> */}

      {/* 组件状态的特性 */}
      {/* <DemoStateTX></DemoStateTX> */}

      {/* useReducer 将组件状态分出来管理 */}
      {/* <ComUseReducer></ComUseReducer> */}

      {/* useEffect 确保将副作用代码在正确的时机被执行 视图更新之后执行钩子 */}
      {/* <UseEffect></UseEffect> */}

      {/* uselayoutEffect 确保将副作用代码在正确的时机被执行 视图更新之前执行钩子 */}
      {/* <UseLayoutEffect></UseLayoutEffect> */}

      {/* 变量状态保持 */}
      {/* <ComUseRef></ComUseRef> */}

      {/* memo 确保父组件更新时  未涉及子组件状态的变化 则子组件不更新 */}
      {/* <ComMemo></ComMemo> */}

      {/* 组件值缓存 */}
      {/* <UseMemo></UseMemo> */}

      {/* 组件方法缓存 */}
      {/* <UseCallback></UseCallback> */}

      {/* 子组件向父组件传递数据 */}
      <Father></Father>
    </div>
  );
}

export default App;
