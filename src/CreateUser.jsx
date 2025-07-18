import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router'
 
const CreateUser = () => {
    const[name,setName]=useState("")
     const[email,setEmail]=useState("")
      const[age,setAge]=useState("")
    const navigate=useNavigate()
      const submit=(e)=>
      {
       
       
        
        e.preventDefault();
         axios.post("http://localhost:3001/create",{name,email,age})
         .then(
            // (result)=>console.log(result.data)
            navigate('/')
            
         )
         .catch((err)=>console.log(err) 
         )
      }
    
  return (
    <div  className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
       <div className='w-50 bg-white rounded p-3 '>
        <h2>Add User</h2>
         <form onSubmit={submit}>
            <div className='mb-2'>
            <label htmlFor=''>Enter Name</label>
            <input type='text'
            placeholder='Enter Name' className='form-control' 
            onChange={(e)=>setName(e.target.value)}
            />
            </div>
            
            <div className='mb-2'>
            <label htmlFor=''>Enter Email</label>
            <input type='email'
            placeholder='Enter Email' className='form-control'
            onChange={(e)=>setEmail(e.target.value)}  />
            </div>
            
           <div className='mb-2'>
            <label htmlFor=''> Age</label>
            <input type='text'
            placeholder='Enter Age' className=' form-control'
            onChange={(e)=>setAge(e.target.value)}  />
            </div>
             <button className='btn btn-success'> Submit</button> 
         </form>
        
         </div>
    </div>
  )
}

export default CreateUser
