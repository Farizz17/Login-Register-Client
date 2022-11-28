import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Khalid from './images/khalid.jpeg';
import { Link } from 'react-router-dom';
import './style.css';

import jwt_decode from "jwt-decode";

function Dashboard() {

    let navigate = useNavigate();
    var username;
    var nama;
    var pass;
    
    if (sessionStorage.getItem('token') === null) {
        username = '';
    }
    else {
        var token = sessionStorage.getItem('token');
        var decoded = jwt_decode(token);
        username = decoded.username;
        nama = decoded.name;
        pass = decoded.password;
    }

    const logout = () => {
        sessionStorage.removeItem("token");
        navigate('/');
    }

    useEffect(() => {
        if (sessionStorage.getItem('token') === null) {
            navigate('/');
        }
        else {
            navigate('/Dashboard')
        }
    }, [navigate]);

    return ( 
        <>
            <nav id="dashboardnav" className="navbar navbar-expand-lg bg-light shadow">
                <div className="container">
                    <h3 className="text-dark">Dashboard RPL Website</h3>
                    <div className="">
                        <ul className="navbar-nav me-auto">
                            {/* <li className="nav-item m-1">
                                <Link to={'/register'} className="btn btn-primary">Register</Link>
                            </li>
                            <li className="nav-item m-1">
                                <Link to={'/'} className="btn btn-primary">Login</Link>
                            </li> */}
                            <li className="nav-item m-1">
                                <button className="btn btn-danger" onClick={logout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <div id="dashboard" className="container-fluid bg-light mt-3">
                <div className="container py-5">
                    <br/>
                    <h3 className="text-center">Selamat Datang, <u>{username}</u> Di Halaman Dashboard</h3>
                    <br/><br/>
                    Selamat Datang, <u><b>{nama}</b></u> !
                    <p>Ini adalah halaman dashboard implementasi <b>Login</b> dan <b>Register</b> menggunakan <b>ReactJS-ExpressJS-MySQL</b> menggunakan <b>JWT Token</b>.</p>
                    <blockquote>
                        Harapannya dengan pembelajaran ini, peserta  didik sudah mampu untuk membuat dan mengimplementasikan sistem <b>Login-Register</b> ini untuk keperluan pembuatan aplikasi yang lebih kompleks.
                    </blockquote>
                    <p>
                        Terimakasih kami ucapkan kepada guru kejuruan kami, tanpa arahan dan bimbingannya, kami tidak dapat untuk membuat berbagai desain website dan pemrograman lainnya.
                        <br />
                            <p className="ms-5">- Pengembangan Perangkat Lunak dan Gim.</p>
                    </p>
                    <p>
                        <br />
                        
                        <b>Bidang Keahlian : Teknik Informatika
                            <br/>
                            Program Keahlian : Pengembangan Perangkat Lunak dan Gim 2021/2024
                            <br />
                            Sekolah : SMKS Taruna Persada Dumai
                            <br/><br/>
                            Guru kejuruan : Bapak Eko Saputra, A.Md.
                        </b>
                    </p>

                    {/* <img src={Khalid} width='400px'/> */}

                </div>
            </div>

            <div className="container-fluid fixed-bottom py-1 text-center bg-secondary text-light">
                Copyright &copy; Muhammad Fariz Al-Haq - 2022
                <br/>
                &copy; 2022. Login-Register Website. All Rights Reserved. Designed, Developed & Maintained by <b>Fariz</b>
            </div>
        </>
     );
}

export default Dashboard;