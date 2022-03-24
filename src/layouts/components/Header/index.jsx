import React, { useState } from 'react'
import PropTypes from 'prop-types'
import screenfull from 'screenfull'
import { Layout, Menu, Badge, Avatar } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  BellOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import styles from './index.module.less'

const { Header } = Layout
const { SubMenu } = Menu

function HeadBar({ collapsed, toggle }) {
  const [isFullScreen, setFullScreen] = useState(false)
  const handleFullScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle()
      setFullScreen(!isFullScreen)
    }
  }
  const signOut = () => {}

  return (
    <Header className={styles.header}>
      <div className={styles.trigger} onClick={toggle}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className={styles.menu}>
        <Menu mode="horizontal" selectable={false}>
          <Menu.Item key="full" onClick={handleFullScreen}>
            {isFullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          </Menu.Item>
          <Menu.Item key="notification">
            <Badge count={25} overflowCount={10} offset={[10, -6]}>
              <BellOutlined />
            </Badge>
          </Menu.Item>
          <SubMenu
            key="user"
            title={
              <div className={styles.avatar}>
                <Avatar size={24} icon={<UserOutlined />} />
                <span className={styles.name}>用户名</span>
              </div>
            }
          >
            <Menu.Item key="info" icon={<UserOutlined />}>
              <span>个人中心</span>
            </Menu.Item>
            <Menu.Item key="seting" icon={<SettingOutlined />}>
              <span>个人设置</span>
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={signOut}>
              <span>登出</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Header>
  )
}

HeadBar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

export default HeadBar
