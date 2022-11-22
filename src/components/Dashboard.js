// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import jwt_decode from "jwt-decode";

// function Dashboard() {

//     let navigate = useNavigate();
//     var username;
    
//     if (sessionStorage.getItem('token') === null) {
//         username = '';
//     }
//     else {
//         var token = sessionStorage.getItem('token');
//         var decoded = jwt_decode(token);
//         username = decoded.username;
//     }

//     const logout = () => {
//         sessionStorage.removeItem("token");
//         navigate('/');
//     }

//     useEffect(() => {
//         if (sessionStorage.getItem('token') === null) {
//             navigate('/');
//         }
//         else {
//             navigate('/dashboard')
//         }
//     }, [navigate]);

//     return ( 
//         <>
//             <nav className="navbar navbar-expand-lg bg-light shadow">
//                 <div className="container">
//                     <h3 className="text-dark">Dashboard</h3>
//                     <div className="">
//                         <ul className="navbar-nav me-auto">
//                             <li className="nav-item">
//                                 <button className="btn btn-danger" onClick={logout}>Logout</button>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
            
//             <div className="container-fluid bg-light">
//                 <div className="container py-5">
//                     Selamat Datang, <b>{username}</b> !
//                     <p>Ini adalah halaman dashboard implementasi <b>login</b> dan <b>Register</b> menggunakan ReactJS-ExpressJS-MySQL menggunakan JWT Token.</p>
//                     <blockquote>
//                         Harapannya dengan pembelajaran ini, peserta  didik sudah mampu untuk membuat dan mengimplementasikan sistem <b>Login-Register</b> ini untuk keperluan pembuatan aplikasi yang lebih kompleks.
//                     </blockquote>
//                 </div>
//             </div>

//             <div className="container-fluid fixed-botton py-3 texxt-center bg-secondary text-light">
//                 Copyright &copy; Muhammad Fariz Al-Haq - 2022
//             </div>
//         </>
//      );
// }

// export default Dashboard;