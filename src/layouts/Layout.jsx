import React, { useState } from 'react'
import { Layout } from 'antd'
import { Siderbar, Header, AppMain, Footer } from './components'

function Layouts() {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout>
        <Siderbar collapsed={collapsed} />
        <Layout className="app-main">
          <Header collapsed={collapsed} toggle={toggle} />
          <AppMain />
          <Footer />
        </Layout>
      </Layout>
  )
}

export default Layouts
