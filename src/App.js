import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css'


function App() {
  return (
    <div>     
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Dashboard' element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
