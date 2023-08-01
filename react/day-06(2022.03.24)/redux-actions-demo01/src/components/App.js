import { useRef } from "react";
import { useSelector } from 'react-redux'
import { useAction } from '../state'
function App() {
  const inputRef = useRef()
  // 获取状态
  const seachState = useSelector((state) => state.search)

  const { searchStart } = useAction()
  const searchHandler = () => {
    searchStart(inputRef.current.value)
  }

  // 处理模板
  const getPackages = () => {
    if (seachState.loading) {
      return <div>loading...</div>;
    }
    if (seachState.error) {
      return <div>{packages.error}</div>;
    }
    return (
      <div>
        <pre>{JSON.stringify(seachState, null, 2)}</pre>
      </div>
    );
  };
  return (
    <>
      <input type='text' ref={inputRef} />
      <button onClick={() => searchHandler()}>搜索</button>
      {getPackages()}
    </>
  );
}

export default App;
