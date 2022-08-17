import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Login from './components/Login';
import Root from './components/Root';
import Product from './components/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Root/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Grid/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
