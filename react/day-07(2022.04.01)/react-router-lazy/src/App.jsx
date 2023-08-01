import { BrowserRouter, NavLink } from 'react-router-dom'
import AppRoute from './Routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink to='/'>首页</NavLink>
        <NavLink to='/about'>关于页</NavLink>
        <AppRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
