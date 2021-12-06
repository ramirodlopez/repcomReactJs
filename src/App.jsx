import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Body from './components/Body/Body';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import Cart from './components/Cart/Cart';
import CartContextProvider, { ProductsProvider } from './context/CartContext/CartContext';


const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/category/PRODUCTS" element={<ItemListContainer />} />
          <Route path="/category/:catId" element={<ItemListContainer />} />
          <Route path="/product/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/contador" element={<ItemCount />} />
          <Route path="/CART" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
