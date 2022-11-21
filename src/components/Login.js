import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

    // State Username, Login & Password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {

    }
    // State Usernaname, Login & Password

    return ( 
        <>
            <div className='container py-5'>
                <h1 className='text-muted'>Login Form</h1>
                <p className='text-muted'>Please Login to Authenticate First</p>
                <hr />
         
                <div className='form-group mt-3'>
                    <label className=''>Username</label>
                     <label className=''>:</label>
                    <input className='form-control' type='text' onChange={(e) => {setUsername(e.target.value) }}></input>
                </div>
       
                <div className='form-group mt-3'>
                    <label className=''>Password</label>
                     <label className=''>:</label>
                    <input className='form-control' type='text' onChange={(e) => {setPassword(e.target.value) }}></input>
                </div>
             
                <div className='form-group'>
                    <button className='btn btn-primary form-control mt-4' onClick={login}>Log In</button>
                </div>

                <p className='text-muted mt-2'>
                    Not have an account? Please <Link to='/Register'>Register</Link>
                </p>
            </div>
        </>
     );
}

export default Login;