import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Foreclosures from './pages/Foreclosures';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
      <div>
        {/* <Home/> */}
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='foreclosures/' element={<Foreclosures/>} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

