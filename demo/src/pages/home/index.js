import React, { useEffect } from 'react'
import { Layout, Menu, Popconfirm, Button, message } from "antd";
import styles from './index.module.scss'
import {
  PieChartOutlined,
  SolutionOutlined,
  FileWordOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAction } from '@/store'
import { useSelector } from 'react-redux';
const { Header, Sider, Content } = Layout;
function HomePage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { userInfoAction, logoutAction } = useAction()
  const { name } = useSelector((state) => state.user.userInfo)
  // 获取用户信息
  // eslint-disable-next-line
  useEffect(() => { userInfoAction() },[])
  // 退出登录
  const logout = ({ type }) => {
    if (type === '确认') {
      logoutAction() 
      message.success('已退出');
      navigate('/login')
    } else if (type === '取消') {
      message.success('已取消操作')
    }
  }
  // 激活菜单的key
  let defaultKey = location.pathname;
  if (defaultKey.startsWith("/publish")) {
    defaultKey = "/publish";
  }
  const items = [
    {
      label: <NavLink to="/dashboard">数据面板</NavLink>,
      key: '/dashboard',
      icon: <PieChartOutlined />,
    },
    {
      label: <NavLink to="/article">内容管理</NavLink>,
      key: '/article',
      icon: <SolutionOutlined />,
    },
    {
      label: <NavLink to="/publish">发布文章</NavLink>,
      key: '/publish',
      icon: <FileWordOutlined />,
    },
  ]
  return (
    <Layout className={styles.geekLayout}>
      <Sider width={148}>
        <div className="logo">GEEK</div>
        <Menu selectedKeys={[defaultKey]} items={items} mode="inline" theme="dark"></Menu>
      </Sider>
      <Layout>
        <Header>
          <span style={{ fontSize: 16 }}>极客园自媒体端</span>
          <div>
            <span>{name}</span>
            <Popconfirm
              title="您确认退出极客园自媒体端吗？"
              okText="确认"
              cancelText="取消"
              onConfirm={() => logout({ type: '确认' })}
              onCancel={() => logout({ type: '取消' })}
            >
              <Button type="link" icon={<LogoutOutlined />}>
                退出
              </Button>
            </Popconfirm>
          </div>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default HomePage