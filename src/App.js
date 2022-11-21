import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>     
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          {/* <Route path='/register' element={<Register/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
