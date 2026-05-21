import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import Home from './pages/homePage';
import Testing from './components/testing';
import SignupPage from './pages/signupPage';
import "./index.css"
import ProductCard from './components/productCard';
import AdminHomePage from './pages/adminHomePage';


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/testing" element={<Testing />} />
        
        <Route path="/admin/*" element={<AdminHomePage />} />
        
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>


   
   </>
  );


}

export default App;