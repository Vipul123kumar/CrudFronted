import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'


const UpdateUser = () => {
 const[name,setName]=useState("")
 const[email,setEmail]=useState("")
 const[age,setAge]=useState("")
 const {id}=useParams();
 const navigate=useNavigate()

 useEffect(()=>
{
  axios.get(`http://localhost:3001/getUser/${id}`)
  .then(result=>{console.log("sucess",result.data)
    setName(result.data.name)
    setEmail(result.data.email)
    setAge(result.data.age)
   


  })
  .catch(err=>console.log(err) )
  
},[])
  const handleSubmit=(e)=>
  {
     e.preventDefault();
         axios.put(`http://localhost:3001/updateUser/${id}`,{name,email,age})
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
        <h2>Update User</h2>
         <form onSubmit={handleSubmit}>
            <div className='mb-2'>
            <label htmlFor=''> Name</label>
            <input type='text'
            placeholder='Enter Name' className='form-control' 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            </div>
            
            <div className='mb-2'>
            <label htmlFor=''>  Email</label>
            <input type='email'
            placeholder='Enter Email' className='form-control' 
              value={email}
            onChange={(e)=>setEmail(e.target.value)} />
            </div>
            
           <div className='mb-2'>
            <label htmlFor=''>  Age</label>
            <input type='text'
            placeholder='Enter Age' className=' form-control' 
              value={age}
            onChange={(e)=>setAge(e.target.value)}
             />
            </div>
               <button className='btn btn-success'>Update</button>
         </form>
        
         </div>
    </div>
  )
}

export default UpdateUser
