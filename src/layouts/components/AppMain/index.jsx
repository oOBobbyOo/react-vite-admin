import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import './index.less'

const { Content } = Layout

function AppMain() {
  return (
    <Content className="app-main-content">
      <Outlet />
    </Content>
  )
}

export default AppMain
