import { useState } from 'react';
import { Link, Navigate} from 'react-router-dom';
import './style.css';
import Axios from "axios";

Axios.defaults.withCredentials = true;

function Register() {

    // State Username, Login & Password
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wrongname, setWrongname] = useState('');
    const [wronguser, setWronguser] = useState('');
    const [wrongpass, setWrongpass] = useState('');

    const login = () => {
        // console.log (username, password);
        
        // Cek Username & Password
        if (name === '') {
            setWrongname('Please enter your name!')
        }

        else if (username === '') {
            setWronguser('Please enter your username!')
        }
        
        else if (password === '') {
            setWrongpass('Please enter your password!')
            setWronguser('')
        }

        else {
            Axios.post("http://localhost:3001/register", {
                username: username,
                password: password,
                name: name,
            }).then((response) => {
                console.log(response);
            });
        }
        // Cek Username & Password
        Navigate('/');
    };
    // State Usernaname, Login & Password

    return ( 
        <div id='boxreg'>
            <h1 className='text-primary text-center mt-3'><b>Welcome To RPL Website</b></h1>
            <div className='container py-5'>
                <h1 className='text-primary'><b>Register Form</b></h1>
                <p className='text-dark'>Please Register to Authentication First!</p>
                <hr />

                <div className='form-group mt-3'>
                    <label className=''>Name</label>
                    <input className='form-control' type='text' onChange={(e) => { setName(e.target.value) }}></input>
                    <b className='text-danger'>{wrongname}</b>
                </div>
         
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
                    <button className='btn btn-primary mt-4 w-100' onClick={login}><b>Register</b></button>
                </div>

                 <p className='text-muted mt-2 text-center'>
                    <input type='checkbox'></input> <b className='text-primary'>Remember me</b>
                </p>

                <p className='text-muted mt-2 text-center'>
                    <b>Have an account?</b> <Link to='/'><b>Login</b></Link>
                </p>
            </div>
        </div>
     );
}

export default Register;