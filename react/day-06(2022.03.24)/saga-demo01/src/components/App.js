import { useRef } from "react";
import { useSelector } from 'react-redux'
import { useAction } from '../state'
function App() {
  const inputRef = useRef()
  const searchState = useSelector((state) => state.appseach)
  const getPackages = () => {
    if (searchState.loading) {
      return <div>loading...</div>;
    }
    if (searchState.error) {
      return <div>{packages.error}</div>;
    }
    return (
      <div>
        <pre>{JSON.stringify(searchState, null, 2)}</pre>
      </div>
    );
  };
  const { search_packages } = useAction()
  const searchHandler = () => {
    search_packages(inputRef.current.value)
    inputRef.current.value = '';
  }
  return (
    <>
      <input type='text' ref={inputRef} />
      <button onClick={() => searchHandler()}>搜索</button>
      {getPackages()}
    </>
  );
}

export default App;
