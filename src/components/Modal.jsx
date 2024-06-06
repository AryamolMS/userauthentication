import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modall({data,onupdateComplete}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [update,setUpdate] = useState({
    username:"",
    address:"",
    phoneno:"",
    country:"",
    state:"",
    email:"",
    password:""
  })
    

  console.log(update);
    const handleUpdate = async(e)=>{
        e.preventDefault()
        
        const {username,address,phoneno,country,state,email,password} = update

        if(!username || !address || !phoneno  || !country || !state || !email || !password){
            alert('Please enter the values')
        }
        else{
            const response = await axios.put(`http://localhost:4000/users/${data.id}`,{
                username,
                address,phoneno,country,state,email,password
            })
            console.log(response.data);
            alert('User details updated')
            onupdateComplete()
            handleClose()
        }
       
    } 

    useEffect(()=>{
        if(data){
            setUpdate({
                username:data.username || "",
                address:data.address || "",
                phoneno:data.phoneno || "",
                country:data.country || "",
                state:data.state || "",
                email:data.email || "",
                password:data.password || ""
            })
        }
    },[data])
  return (
    <div>

        <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className='border-secondary'>
                    <div>
                        <input type="text" className='form-control' placeholder='username'  value={update.username} onChange={e=>setUpdate({...update,username:e.target.value})}/>
                    </div>
                    <div className="mt-5">
                        <input type="text" className='form-control' placeholder='address' value={update.address} onChange={e=>setUpdate({...update,address:e.target.value})}/>
                    </div>
                    <div className="mt-5">
                        <input type="text" className='form-control' placeholder='phone no' value={update.phoneno} onChange={e=>setUpdate({...update,phoneno:e.target.value})}/>
                    </div>
                    <div className="mt-5">
                        <input type="text" className='form-control' placeholder='Country' value={update.country} onChange={e=>setUpdate({...update,country:e.target.value})}/>
                    </div>
                    <div className="mt-5">
                        <input type="text" className='form-control' placeholder='State' value={update.state} onChange={e=>setUpdate({...update,state:e.target.value})}/>
                    </div>
                    <div className="mt-5">
                        <input type="text" className='form-control' placeholder='email' value={update.email} onChange={e=>setUpdate({...update,email:e.target.value})}/>
                    </div>
                    <div className="mt-5">
                        <input type="text" className='form-control' placeholder='password' value={update.password} onChange={e=>setUpdate({...update,password:e.target.value})}/>
                    </div>
                </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={handleUpdate} >Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Modall