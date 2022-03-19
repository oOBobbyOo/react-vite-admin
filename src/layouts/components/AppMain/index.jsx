import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
const { Content } = Layout
import './index.less'

function AppMain() {
  return (
    <Content className="app-main-content">
      <Outlet />
    </Content>
  )
}

export default AppMain
