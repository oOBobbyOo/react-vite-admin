import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

const { Content } = Layout

function AppMain() {
  return (
    <Content className="antd-main-content">
      <Outlet />
    </Content>
  )
}

export default AppMain
