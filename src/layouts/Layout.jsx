import React, { useState } from 'react'
import { Layout } from 'antd'
import { Siderbar, Header, AppMain, Footer } from './components'
import './index.less'

function Layouts() {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout>
      <Siderbar collapsed={collapsed} />
      <Layout>
        <Header collapsed={collapsed} toggle={toggle} />
        <div className="antd-global-content">
          <AppMain />
          <Footer />
        </div>
      </Layout>
    </Layout>
  )
}

export default Layouts
