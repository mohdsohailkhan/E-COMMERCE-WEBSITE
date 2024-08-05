import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Badge, Button } from 'react-bootstrap';
import logo from './assets/7.png';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductGallery from './ProductGallery';
import ProductDetails from './ProductDetails';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [cartItems, setCartItems] = useState({});
  useEffect(()=>{
    const user = localStorage.getItem('userEmail');
    if(!user){
      navigate('/login')
    }
    else{
      navigate('/')
    }
  },[])
  useEffect(() => {
    const UserEmail = localStorage.getItem('userEmail')
    if (UserEmail) {
      setUser(UserEmail);
    }
  }, [])
  const handleAddToCart = (item) => {
    setCartItems({...cartItems, ...item})
  }
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <div className='logoimg'>
              <img className='logo' src={logo} />
              <h3>InstaBuy!</h3>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            { user && <Button onClick={()=>navigate('/cart')}>Cart &nbsp; {Object.keys(cartItems).length > 0 && (<Badge bg='success'>{Object.keys(cartItems).length}</Badge>)}</Button>}
            &nbsp; &nbsp;
            <Button className='loginButton' onClick={() => navigate('/login')}>{user ? 'LogOut' : 'LogIn'}</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/register' element={<Register setUser={setUser} />} />
        <Route path='/productgallery' element={<ProductGallery setUser={setUser} />} />
        <Route path='/product/:id' element={<ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems} setUser={setUser} />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} setUser={setUser} />} />
        <Route path='/checkOut' element={<CheckOut />} />
      </Routes>
    </div>
  )
}

export default App
