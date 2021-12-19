import "./index.css";
import logoImg from "../../../src/assets/logitoasd.png";
import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { CartContext } from "../../context/CartContext/CartContext";

export const NavBar = () => {
  const cartCont = useContext(CartContext);

  return (
    <header>
      <nav className="containerGlobal">
        <Link to="/">
          <img className="logito" src={logoImg} alt="" />
        </Link>
        <div className="container">
          <Link to="/">HOME</Link>
          <Link to="/category/PRODUCTS">PRODUCTS</Link>
          <Link to="/category/CARTAS">CARTAS</Link>
          <Link to="/category/GPS">GPS</Link>
        </div>
        {cartCont.totalQty() > 0 && (
          <Link to="/CART">
            <CartWidget />
          </Link>
        )}
      </nav>
    </header>
  );
};
