import React from 'react';
import {Users} from "../users"
import "../App.css"
import { useState } from 'react';
import Table from '../Table';
const Filt2 = () => {
  const [query,setQuery] = useState("")

  const keys =["first_name","last_name","email"]

  const search = (data) =>{
    return data.filter((item) => keys.some((key)=> item[key].toLowerCase().includes(query))).slice(0,10)
  }

  return (
    <div>
    <input type="text" placeholder='Search...' onChange={(e)=>setQuery(e.target.value)} className='search' />
    <Table data={search(Users)}/>
    </div>
  )
}

export default Filt2