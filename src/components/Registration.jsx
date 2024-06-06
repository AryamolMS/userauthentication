import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Registration() {

    const navigate = useNavigate()
    const [username,usernameChange] = useState("")
    const [address,addressChange] = useState("")
    const [phoneno,phonenoChange] = useState("")
    const [country,counrtyChange] = useState("")
    const [state,stateChange] = useState("")
    const [email,emailChange] = useState("")
    const [password,passwordChange] = useState("")

    const IsValidate = ()=>{
        let isproceed = true;
        let errormessage = 'Please enter the value in '
        if(username==null || username=='' ){
            isproceed =false;
            errormessage += 'username'
        }
        if(phoneno==null || phoneno=='' ){
            isproceed =false;
            errormessage += ' phoneno'
        }
        if(email==null || email=='' ){
            isproceed =false;
            errormessage += ' email'
        }
        if(password==null || password=='' ){
            isproceed =false;
            errormessage += ' password'
        }
        if(!isproceed){
            alert(errormessage)
        }
  
        return isproceed
    }

    const handleSubmit = (e)=>{
        if(IsValidate()){
        e.preventDefault()
        let regobj = {username,address,phoneno,country,state,email,password}

        fetch("http://localhost:4000/users",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res)=>{
            alert('Registred successfully')
            navigate('/login')
        }).catch((err)=>{
            alert('Registration failed')
        })
    }
    }
    
  
  return (
    <>
    <div className='container'>
        <h1 className='text-center mt-5 text-danger'>Register</h1>
        <div className="d-flex justify-content-center align-items-center">
            <div className="form p-4 mb-5 rounded" style={{width:'500px'}}>
                <form className='border-secondary' onSubmit={handleSubmit}>
                    <div>
                        <input type="text" className='form-control' placeholder='username'  value={username} onChange={e=>usernameChange(e.target.value)}/>
                    </div>
                    <div className="mt-5">
                        <input type="text" className='form-control' placeholder='address' value={address} onChange={e=>addressChange(e.target.value)}/>
                    </div>
                    <div className="mt-5">
                        <input type="text" className='form-control' placeholder='phone no' value={phoneno} onChange={e=>phonenoChange(e.target.value)}/>
                    </div>
                    <div className="mt-5">
                        <input type="text" className='form-control' placeholder='Country' value={country} onChange={e=>counrtyChange(e.target.value)}/>
                    </div>
                    <div className="mt-5">
                        <input type="text" className='form-control' placeholder='State' value={state} onChange={e=>stateChange(e.target.value)}/>
                    </div>
                    <div className="mt-5">
                        <input type="text" className='form-control' placeholder='email' value={email} onChange={e=>emailChange(e.target.value)}/>
                    </div>
                    <div className="mt-5">
                        <input type="password" className='form-control' placeholder='password' value={password} onChange={e=>passwordChange(e.target.value)}/>
                    </div>
                    <div className="mt-5 d-flex justify-content-center">
                        <button className='btn btn-success me-3'>Register</button>
                        <button className='btn btn-danger'>Cancel</button>
                    </div>
                    <div className="mt-3 text-center">
                        <p>Already have an account? <Link to={'/login'} style={{textDecoration:'none',color:'green',fontWeight:'bold'}}>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Registration