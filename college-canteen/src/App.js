import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Login from './components/Login';
import Root from './components/Root';
import Product from './components/Product';
import { useDispatch } from 'react-redux';
import { actionCreaters } from "./state/index";
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(localStorage.getItem('darkTheme'))
    const defaultTheme = () => {
      dispatch(actionCreaters.setThemeDark(!Boolean(localStorage.getItem('darkTheme'))));
    }
    defaultTheme();
  })

  return (
    <>
      <BrowserRouter>
      {/* <div onClick={
          () => {
            dispatch(actionCreaters.setThemeDark(Boolean(localStorage.getItem('darkTheme'))));
          }
        }>butttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt</div>
      <div onClick={
          () => {
            console.log(Boolean(localStorage.getItem('darkTheme')));
          }
        }>clggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</div> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Grid />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
