import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shopping from './components/Shopping';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setcartTotal] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    let newTot = 0;
    cart.map((x) => (newTot = x.quantity + newTot));
    setcartTotal(newTot);
  }, [cart]);

  const open = () => {
    const newState = !openModal;
    setOpenModal(newState);
  };

  return (
    <>
      <BrowserRouter>
        <Nav cart={cart} cartTotal={cartTotal} open={open} />
        <Cart cart={cart} setCart={setCart} openModal={openModal} open={open} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/shop'
            element={
              <Shopping
                cart={cart}
                setCart={setCart}
                cartTotal={cartTotal}
                setcartTotal={setcartTotal}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
