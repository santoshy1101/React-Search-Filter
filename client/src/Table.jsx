import React from 'react'
import "./App.css"
const Table = ({data}) => {
  return (
    <>
    <table>
           <thead>
           <tr>
           <th>FirstName</th>
           <th>SureName</th>
           <th>Email</th>
       </tr>
           </thead>
           
           <tbody>
           {
            data.map((user)=>(
                <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                </tr>
            ))
        }
           </tbody>
           
           
    </table>
    </>
  )
}

export default Table