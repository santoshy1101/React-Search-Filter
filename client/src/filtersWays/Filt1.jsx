import React from 'react';
import {Users} from "../users"
import "../App.css"
import { useState } from 'react';
const Filt1 = () => {
  const [query,setQuery] = useState("")

  return (
    <div>
    <input type="text" placeholder='Search...' onChange={(e)=>setQuery(e.target.value)} className='search' />
    <ul className="list">
    {Users.filter(ele=>ele.first_name.toLocaleLowerCase().includes(query)).map((user)=>(
      <li key={user.id} className="listItem">{user.first_name}</li>
    )) }
    </ul>
    
    </div>
  )
}

export default Filt1