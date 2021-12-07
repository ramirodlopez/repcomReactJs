import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import './index.css'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cartCont = useContext(CartContext);

    return (
        <div>
            <div className="fonditoCart">
                <h1 className="tittleCart"><center>Carrito De Compras</center></h1>
                {cartCont.totalQty() > 0 ? <button type="button" class="btn btn-dark" onClick={() => cartCont.clear()}>Vaciar Carrito</button> : <Link to="/">
                    <button id="btnB" type="button" className="btn btn-secondary">No hay productos en el carrito</button>
                </Link>}
                <div>
                    {cartCont.cartList.map((product) => (
                        <div className="cardCarrito">
                            <h2 className="tittleOpen">
                                {product.itemQty}
                                x
                                <img className="imgCart" src={product.itemImg} alt="producto" />
                                {product.itemName}  ${product.itemQty * product.itemPrice}
                                <button id="buttonCart" type="button" class="btn btn-dark" onClick={() => cartCont.removeItem(product.itemId)}>Quitar</button>
                            </h2>
                        </div>
                    ))}
                    <p></p>
                    {cartCont.totalQty() > 0 && <h2 className="tittleCart"><center>Precio Total: ${cartCont.totalPrice()}</center></h2>}
                </div>
            </div>
        </div >
    );
};

export default Cart;