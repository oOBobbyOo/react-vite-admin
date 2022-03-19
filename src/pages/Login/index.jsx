import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './login.less'

function Login() {
  const navigate = useNavigate()

  const checkUser = (values) => {
    const users = [
      ['admin', 'admin123'],
      ['guest', 'guest123']
    ]
    return users.some((user) => user[0] === values.username && user[1] === values.password)
  }

  const onFinish = (values) => {
    if (checkUser(values)) {
      navigate('/')
    } else {
      message.error('请输入正确的用户名和密码！')
    }
  }

  return (
    <div className="login-container">
      <Form name="loginForm" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名!'
            }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!'
            }
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <a className="login-form-forgot">忘记密码</a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
