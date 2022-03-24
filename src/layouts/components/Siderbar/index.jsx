import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd'
import { BankOutlined, FormOutlined, TableOutlined } from '@ant-design/icons'
import './index.less'

const { Sider } = Layout
const { SubMenu } = Menu

function Sidebar({ collapsed }) {
  return (
    <Sider className="siderbar" trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />

      <Menu mode="inline" theme="dark">
        <SubMenu key="dashboard" icon={<BankOutlined />} title="首页">
          <Menu.Item key="analysis">
            <Link to="/dashboard/analysis">
              <span>分析页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="monitor">
            <Link to="/dashboard/monitor">
              <span>监控页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="workplace">
            <Link to="/dashboard/workplace">
              <span>工作台</span>
            </Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="form" icon={<FormOutlined />} title="表单页">
          <Menu.Item key="baseForm">
            <Link to="/form/base-form">
              <span>基础表单</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="setpForm">
            <Link to="/form/setp-form">
              <span>分步表单</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="advancedForm">
            <Link to="/form/advanced-form">
              <span>高级表单</span>
            </Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="table" icon={<TableOutlined />} title="表格页">
          <Menu.Item key="baseTable">
            <Link to="/table/base-table">
              <span>基础表格</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="advancedTable">
            <Link to="/table/advanced-table">
              <span>高级表格</span>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired
}

export default Sidebar
