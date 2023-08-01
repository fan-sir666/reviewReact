import React from 'react'
import styles from './index.module.scss'
import logo from '@/assets/images/logo.png'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAction } from '@/store';
import { useNavigate } from 'react-router-dom'
function LoginPage() {
  const { loginAction } = useAction()
  const navigate = useNavigate()
  // 获取用户输入的值
  const onFinish = (values) => {
    const { mobile, code } = values
    loginAction({ mobile, code }).then(() => {
      navigate('/dashboard')
      message.success('登录成功')
    }, () => message.error('登录失败'))
  }
  return (
    <div className={styles.login}>
      <div className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
          size="large"
          initialValues={{
            mobile: '13911111111',
            code: '246810',
            isAgree: true
          }}
          validateTrigger={["onChange", "onBlur"]}
          onFinish={onFinish}
          autoComplete="off">
          <Form.Item
            name="mobile"
            rules={[
              { required: true, message: "请输入手机号" },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "手机格式不正确",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="请输入手机号"></Input>
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              { required: true, message: "请输入验证码" },
              { len: 6, message: "验证码6个字符串" },
            ]}
          >
            <Input prefix={<LockOutlined />} placeholder="请输入验证码"></Input>
          </Form.Item>
          <Form.Item
            name="isAgree"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "请勾选协议",
                validator: (_, value) => value ? Promise.resolve() : Promise.reject()
              },
            ]}
          >
            <Checkbox>我已阅读并同意「用户协议」和「隐私条款」</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage