import './index.css'
import carritoImg from '../../../src/assets/carritoDos.png';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';


const CartWidget = () => {

    const cartCont = useContext(CartContext);

    return (
        <div>
            <div class="contenedorCarrito">
                <img
                    className="carrito"
                    src={carritoImg}
                    alt=""
                />
                <div class="texto-encimaCarrito">
                    <h5>{cartCont.totalItems()}</h5>
                </div>
            </div>
        </div>
    )
}

export default CartWidget