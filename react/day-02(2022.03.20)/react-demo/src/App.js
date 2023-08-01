import { useState } from 'react';
import UserInfo from './components/UserInfo';
import UserNameInput from './components/UserNameInput';
import { UserContext } from './Context'

function App() {
  /* 跨组件通信 
    1. 创建上下文对象 createContext
    2. 提供数据 上下文对象.Provider value={数据}
    3. 注入数据 useContext(上下文对象)
  */
  const [userName, setUserName] = useState('张三')
  return (
    <UserContext.Provider value={{ userName, setUserName }} >
      <UserInfo></UserInfo>
      <UserNameInput></UserNameInput>
    </UserContext.Provider>
  );
}

export default App;
