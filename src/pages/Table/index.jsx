import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

function Table() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Table</h1>

      <Button type="primary" onClick={() => navigate('/form')}>
        to form
      </Button>
    </div>
  )
}

export default Table
