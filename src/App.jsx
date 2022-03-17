import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'moment/locale/zh-cn'

import Home from './pages/Home/Home'
import About from './pages/About/About'

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Suspense fallback={<span>loading</span>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Router>
      </Suspense>
    </ConfigProvider>
  )
}

export default App
