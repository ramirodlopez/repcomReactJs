import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Body from './components/Body/Body';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import Cart from './components/Cart/Cart';


const App = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default App;
