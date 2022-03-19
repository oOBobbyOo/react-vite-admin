import React from 'react'
import { Layout } from 'antd'
const { Sider } = Layout

function Sidebar({ collapsed }) {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      Sidebar
    </Sider>
  )
}

export default Sidebar
