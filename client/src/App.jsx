import React, { useEffect } from 'react'
import { Users } from './users'
import './App.css'
import { useState } from 'react'
import Table from './Table'
import axios from 'axios'
const App = () => {
  const [query, setQuery] = useState('')
  const [data, setData] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`http://localhost:5000?q=${query}`)

      setData(response.data)
    }

    if (query.length === 0 || query.length > 0) fetchUsers()
  }, [query])

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        className="search"
      />
      {data.length > 0 && <Table data={data} />}
    </div>
  )
}

export default App
