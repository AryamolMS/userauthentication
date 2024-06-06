import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Modall from './Modal';
import { useNavigate } from 'react-router-dom';

function Home() {

  const [data,setData] = useState("")
  const navigate = useNavigate()

  const getData = async()=>{
    const response = await axios.get('http://localhost:4000/users')
    setData(response.data)
  }

  const handleUpdatecomplete = ()=>{
    getData()
  }

  const logOut = ()=>{
    navigate('/')
  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <>
        <div className='p-3'>
          <button className='btn btn-success ms-auto' onClick={logOut}>LogOut</button>
        </div>
    <div className="container mt-5 pt-5">

    <Table striped bordered hover >
      <thead>
        <tr>
          <th>SI no</th>
          <th>UserName</th>
          <th>Address</th>
          <th>phoneno</th>
          <th>Country</th>
          <th>State</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.length>0?
        data.map((item,index)=>(<tr>
          <td>{index+1}</td>
          <td>{item.username}</td>
          <td>{item.address}</td>
          <td>{item.phoneno}</td>
          <td>{item.country}</td>
          <td>{item.state}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td><Modall data={item} onupdateComplete={handleUpdatecomplete}/></td>
        </tr>))
        : <p>No data available</p>}
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default Home