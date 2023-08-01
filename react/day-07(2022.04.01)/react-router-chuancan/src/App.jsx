import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Result from './components/Result';
import './App.css'
function App() {
  const classNameActive = ({ isActive }) => (isActive ? 'active' : 'defaultx');
  return (
    <>
      <h1>路由传参</h1>
      <BrowserRouter>
        {/* <NavLink to='/detail?name=张三&age=18'>详情页</NavLink>
        <NavLink to='/about/185663954'>联系我们</NavLink> */}
        <NavLink to='/detail?name=张三&age=18&hobby=football&hobby=pingpang' className={classNameActive}>详情页</NavLink>
        <NavLink to='/about/185663954' className={classNameActive}>联系我们</NavLink>
        <NavLink to='/result' state={{name:'张三',age:18}}>路由状态传参</NavLink>
        <Routes>
          <Route index element={<Detail />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
          <Route path='/about/:mobile' element={<About />}></Route>
          <Route path='/result' element={<Result/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
