import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router'
const User = () => {
    const [user ,setUser]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/")
        .then(result=>{setUser(result.data)
          console.log("after effetct",user)}
          
    )
        .catch(err=>console.log(err)
        )
    },[])

  const handleDelete=(id)=>
  {
    axios.delete("http://localhost:3001/deleteUser/"+id)
    .then(res=>
        {
            console.log(res)
            window.location.reload()
        })
    .catch(err=>console.log(err)
    
    )
     
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
       
        <div className='w-70 bg-white rounded p-3 '>
            <Link to='/create'> <button className='btn btn-success'>ADD+</button> </Link>
            <table className='table gap-2'>
                <thead>
                <th>Name</th>
                  <th className=' text-center'>Email</th>
                    <th>Age</th>
                      <th className='text-center'>Action</th>
                   
                </thead>
                <tbody>
                   { 
                    user.map((user)=>
                        {
                            return <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td><Link to={`/update/${user._id}`}>  <button className='btn btn-success'>Update</button> </Link>
                                    <button onClick={(e)=>handleDelete(user._id)} className='btn btn-danger'>Delete</button> 
                                </td>
                            </tr>
                         }
                    )
                   }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default User
