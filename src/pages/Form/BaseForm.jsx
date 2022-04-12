import React, { useState } from 'react'
import { Card, Form, Input, InputNumber, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Space } from 'antd'

const { Option } = Select

const residences = [
  {
    value: 'hubei',
    label: '湖北',
    children: [
      {
        value: 'wuhan',
        label: '武汉',
        children: [
          {
            value: 'jiangxia',
            label: '江夏区'
          },
          {
            value: 'caidian',
            label: '蔡甸区'
          },
          {
            value: 'hongshan',
            label: '洪山区'
          }
        ]
      }
    ]
  }
]

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
    md: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
    md: { span: 20 }
  }
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
}

function BaseForm() {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    // eslint-disable-next-line no-console
    console.log(values)
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  )
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  )

  const [autoCompleteResult, setAutoCompleteResult] = useState([])

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([])
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`))
    }
  }

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website
  }))

  return (
    <>
      <Card title="基础表单">
        <Form
          style={{ width: '80%', maxWidth: '500px', margin: 'auto' }}
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: '86',
            suffix: 'CNY'
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              {
                type: 'email',
                message: '请输入正确的邮箱地址'
              },
              {
                required: true,
                message: '请输入您的邮箱地址'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: '请输入您的密码'
              },
              {
                min: 6,
                message: '密码至少为6个字符'
              },
              {
                max: 16,
                message: '密码最多为16个字符'
              },
              {
                whitespace: true,
                message: '密码中不能有空格'
              }
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请确认您的密码'
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('您两次输入的密码不匹配'))
                }
              })
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="昵称"
            tooltip="请输入昵称"
            rules={[{ required: true, message: '请输入您的昵称', whitespace: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="residence"
            label="居住地"
            rules={[{ type: 'array', required: true, message: '请选择居住地' }]}
          >
            <Cascader options={residences} />
          </Form.Item>

          <Form.Item
            name="phone"
            label="手机号码"
            rules={[
              { len: 11, pattern: /^[1][3,4,5,7,8][0-9]{9}$/, required: true, message: '请输入正确的11位手机号码' }
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="donation" label="捐赠" rules={[{ required: true, message: '请输入您的捐款金额' }]}>
            <InputNumber addonAfter={suffixSelector} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="website"
            label="站点"
            rules={[
              {
                required: true,
                message: '请输入您的个人站点'
              }
            ]}
          >
            <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="">
              <Input />
            </AutoComplete>
          </Form.Item>

          <Form.Item name="intro" label="个人信息" rules={[{ required: true, message: '请输入您的个人信息' }]}>
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>

          <Form.Item name="gender" label="性别" rules={[{ required: true, message: '请选择性别' }]}>
            <Select placeholder="请选择您的性别">
              <Option value="male">男</Option>
              <Option value="female">女</Option>
              <Option value="other">其他</Option>
            </Select>
          </Form.Item>

          <Form.Item label="验证码">
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item name="captcha" noStyle rules={[{ required: true, message: '请输入验证码' }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Button>获取验证码</Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('请阅读并同意协议')))
              }
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              我已阅读并同意<a href="https://github.com">协议</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Space size="small">
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button type="default" htmlType="reset">
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

export default BaseForm
