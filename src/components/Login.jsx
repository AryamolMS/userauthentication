import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async(e)=>{
    e.preventDefault()
    if(validate()){
      const response = await fetch('http://localhost:4000/users')
      if(!response.ok){
        alert("Something went wrong")
      }
      const users = await response.json();
      const user = users.find((user)=>user.username === username && user.password === password)

      if(user){
        alert('login successfull')
        console.log('login successfull');
        navigate('/home')
      }
      else{
        alert('invalid username or password')
      }
    }
  }

  const validate = ()=>{
    let result = true;
    if(username === '' || username=== null){
      result = false;
      alert('Please enter username')
    }
    if(password === '' || password=== null){
      result = false;
      alert('Please enter password')
    }

    return result
  }

   return (
    <div className='container'>
      <h1 className='text-center mt-5 text-danger'>Login</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="form p-4 rounded" style={{ width: '500px' }}>
          <form className='border-secondary' onSubmit={handleLogin}>
            <div>
              <input
                type="text"
                className='form-control'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                className='form-control'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-3 d-flex justify-content-center">
              <button type='submit' className='btn btn-success me-3'>Login</button>
              <button type='button' className='btn btn-danger' >Cancel</button>
            </div>
            <div className="mt-3 text-center">
              <p>Don't have an account? <Link to={'/'} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold' }}>Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
