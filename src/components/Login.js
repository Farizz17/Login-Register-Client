import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './style.css';
import Axios from "axios";

Axios.defaults.withCredentials = true;

function Login() {

    // State Username, Login & Password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wronguser, setWronguser] = useState('');
    const [wrongpass, setWrongpass] = useState('');
    const [status, setStatus] = useState('');
    let navigate = useNavigate();

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

        else {
            Axios.post("http://localhost:3001/", {
                username: username,
                password: password,
            }).then((response) => {
                if (response.data.message) {
                    setStatus(response.data.message);
                }
                else {
                    sessionStorage.setItem('token', response.data);
                    navigate('/dashboard');
                }
            });
        }
        // Cek Username & Password
    }
    // State Usernaname, Login & Password

    useEffect(() => {
        if (sessionStorage.getItem("token") === null) {
            navigate('/');
        }
        else {
            navigate('/dashboard');
        }
    }, [navigate]);

    return ( 
        <div id='boxlog'>
            <h1 className='text-light text-center mt-3'><b>Welcome To RPL Website</b></h1>
            <div className='container py-5'>
                <h1 className='text-light'><b>Login Form</b></h1>
                <p className='text-light'>Please Login to Authentication First!</p>
                <hr />
         
                <div className='form-group mt-3'>
                    <label className='text-light'>Username</label>
                    <input className='form-control' type='text' onChange={(e) => { setUsername(e.target.value) }}></input>
                    <b id='wronguserlog' className='text-danger'>{wronguser}</b>
                </div>
       
                <div className='form-group mt-3'>
                    <label className='text-light'>Password</label>
                    <input className='form-control' type='password' onChange={(e) => { setPassword(e.target.value) }}></input>
                     <b id='wrongpasslog' className='text-danger'>{wrongpass}</b>
                </div>
             
                <div className='form-group'>
                    <button className='btn btn-warning mt-4 w-100' onClick={login}><b>Log In</b></button>
                </div>

                 <p className='text-light mt-2 text-center'>
                    <Link to='/Register'><b>Forgotten Password?</b></Link>
                </p>

                <p className='text-light mt-2 text-center'>
                    <b>Not have an account?</b> <Link to='/Register'><b>Create New Account</b></Link>
                </p>
            </div>
        </div>
     );
}

export default Login;