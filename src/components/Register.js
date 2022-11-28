import { useState } from 'react';
import { Link, Navigate, useNavigate} from 'react-router-dom';
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
    let Navigate = useNavigate();

    const register = () => {
        // console.log (username, password);
        
        // Cek Username & Password
        if (name === '') {
            setWrongname('Please enter your name!')
        }

        else if (username === '') {
            setWronguser('Please enter your username!')
            setWrongname('')
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
            });

            console.log(name, username, password);
        }
        // Cek Username & Password

        Navigate('/');
    };
    // State Usernaname, Login & Password

    return ( 
        <div id='boxreg'>
            {/* <span id='jdlbtn'>
        <Link to='/Register' class="signUpBtn">DAFTAR</Link>
          <Link to='/' class="loginBtn">MASUK</Link>
            </span>  */}
            <h1 className='text-dark text-center mt-3'><b>Welcome To RPL Website</b></h1>
            <div className='container py-5'>
                <h1 className='text-dark'><b>Register Form</b></h1>
                <p className='text-dark'>Please Register to Authentication First!</p>
                <hr />

                <div className='form-group mt-3'>
                    {/* <label className='text-light'>Name</label> */}
                    <input placeholder='Name' className='form-control' type='text' onChange={(e) => { setName(e.target.value) }}></input>
                    <b id='input' className='text-danger'>{wrongname}</b>
                </div>
         
                <div className='form-group mt-3'>
                    {/* <label className='text-light'>Username</label> */}
                    <input placeholder='Username' className='form-control' type='text' onChange={(e) => { setUsername(e.target.value) }}></input>
                    <b id='input' className='text-danger'>{wronguser}</b>
                </div>
       
                <div className='form-group mt-3'>
                    {/* <label className='text-light'>Password</label> */}
                    <input placeholder='Password' className='form-control' type='password' onChange={(e) => { setPassword(e.target.value) }}></input>
                    <b id='input' className='text-danger'>{wrongpass}</b>
                </div>
             
                <div className='form-group'>
                    <button className='btn btn-warning mt-4 w-100' onClick={register}><b>Register</b></button>
                </div>

                 <p className='text-muted mt-2 text-center'>
                    <input type='checkbox'></input> <b className='text-light'>Remember me</b>
                </p>

                <p className='text-light mt-2 text-center'>
                    <b>Have an account?</b> <Link to='/'><b id='Loginbutton' className='text-light'>Login</b></Link>
                </p>
            </div>
        </div>
     );
}

export default Register;