import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Login() {

    // State Username, Login & Password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wronguser, setWronguser] = useState('');
    const [wrongpass, setWrongpass] = useState('');

    const login = () => {
        // console.log (username, password);
        
        // Cek Username & Password
        if (username === '') {
            setWronguser('Please enter your username!')
        }
        
        else if (password === '') {
            setWrongpass('Please enter your password!')
            setWronguser('')
        }
        // Cek Username & Password
    }
    // State Usernaname, Login & Password

    return ( 
        <div id='boxlog'>
            <h1 className='text-primary text-center mt-3'><b>Welcome To RPL Website</b></h1>
            <div className='container py-5'>
                <h1 className='text-primary'><b>Login Form</b></h1>
                <p className='text-dark'>Please Login to Authentication First!</p>
                <hr />
         
                <div className='form-group mt-3'>
                    <label className=''>Username</label>
                    <input className='form-control' type='text' onChange={(e) => { setUsername(e.target.value) }}></input>
                    <b className='text-danger'>{wronguser}</b>
                </div>
       
                <div className='form-group mt-3'>
                    <label className=''>Password</label>
                    <input className='form-control' type='password' onChange={(e) => { setPassword(e.target.value) }}></input>
                     <b className='text-danger'>{wrongpass}</b>
                </div>
             
                <div className='form-group'>
                    <button className='btn btn-primary mt-4 w-100' onClick={login}><b>Log In</b></button>
                </div>

                 <p className='text-muted mt-2 text-center'>
                    <Link to='/Register'><b>Forgotten Password?</b></Link>
                </p>

                <p className='text-muted mt-2 text-center'>
                    <b>Not have an account?</b> <Link to='/Register'><b>Create New Account</b></Link>
                </p>
            </div>
        </div>
     );
}

export default Login;