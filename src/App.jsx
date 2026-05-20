import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import Home from './pages/homePage';
import Testing from './components/testing';
import "./index.css"
import ProductCard from './components/productCard';


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/product" element={<ProductCard src="https://th.bing.com/th/id/OIP.Qupyf1GgvK9dr0LHmFyLRQHaKX?w=127&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" name="Apple iPhone 14 Pro Max" price="Rs. 129,999" />} />
        <Route path="/product1" element={<ProductCard src="https://th.bing.com/th/id/OIP.B_CTc1tmU_M64Tui2enwZwHaHa?w=205&h=204&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" name="Apple iPhone 15 Pro Max" price="Rs. 229,999" />} />
        <Route path="/product2" element={<ProductCard src="https://th.bing.com/th/id/OIP.qnX8JvM1yyXrM6qtMiVr-QHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" name="Apple iPhone 16 Pro Max" price="Rs. 329,999" />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>


   
   </>
  );


}

export default App;