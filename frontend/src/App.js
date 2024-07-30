import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Cart from './components/cart';
import Phones from './components/phones';
import Laptops from './components/laptops';
import Beauty from './components/beauty';
import Groceries from './components/groceries';
import { CartProvider } from 'react-use-cart';
import Mens from './components/mens';
import Womens from './components/Womens';
import Registration from './components/Registration';
import Login from './components/Login';
import { UserProvider } from './components/UserContext';
import Buy from './components/Buy';
import About from './components/about';
import Contact from './components/contact';

const App = () => {
  return (
    <div className='mainApp'>
        <CartProvider>
          <UserProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About/>}/>
              <Route path='/signup' element={<Registration />} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/buy' element={<Buy />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/phones' element={<Phones category="smartphones" />} />
              <Route path='/beauty' element={<Beauty category="beauty" />} />
              <Route path='/laptops' element={<Laptops category="laptops" />} />
              <Route path='/groceries' element={<Groceries category="groceries" />} />
              <Route path='/mens' element={<Mens category="mens-shirts" />} />
              <Route path='/womens' element={<Womens category="tops" />} />
            </Routes>
          </Router>
          </UserProvider>
        </CartProvider>
    </div>
  );
};

export default App;
