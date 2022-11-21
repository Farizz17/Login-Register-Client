import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'


function App() {
  return (
    <div>     
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/Register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
