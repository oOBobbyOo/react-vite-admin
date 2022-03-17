import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import style from './Home.module.less'

function Home() {
  const navigate = useNavigate()
  return (
    <div className={style.home}>
      <h1>Home</h1>

      <Button type="primary" onClick={() => navigate('/about')}>
        about
      </Button>
    </div>
  )
}

export default Home
