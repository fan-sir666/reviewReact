import { BrowserRouter, Routes, Route, Outlet, Link, Navigate } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Error from './components/Error/Error';
import JieShao from './components/About/JieShao'
import AboutMy from './components/About/AboutMy'
function App() {
  return (
    <>
      <BrowserRouter>
        {/* 路由规则 */}
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}>
              {/* 索引路由 */}
              <Route index element={<JieShao />}></Route>
              {/* 二级不能有 / */}
              <Route path='jieshao' element={<JieShao/>}></Route>
              <Route path='lianmy' element={<AboutMy />}></Route>
            </Route>
          </Route>
          {/* <Route path='*' element={<Error/>}></Route> */}
          {/* Navigate 组件的replace 去掉上一次的路由历史记录 解决重定向循环 */}
          <Route path='*' element={<Navigate to='about' />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
function Layout() {
  return (
    <>
      <h1>路由的基本使用</h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Outlet />
      <footer style={{ marginTop: 800 }}>😁😁😁😁😁😁😁😁😁😁😁😁</footer>
    </>
  )
}

export default App;
