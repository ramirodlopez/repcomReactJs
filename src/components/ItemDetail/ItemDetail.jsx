import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './index.css'
import { CartContext } from '../../context/CartContext/CartContext';




export const ItemDetail = ({ item, onAdd, irAlCarrito, onFinish }) => {

    const cartCont = useContext(CartContext)

    return (
        <div>
            <div className="cardGOpen">
                <h1 className="tittleOpen">{item.name}</h1>
                <img src={item.img} alt="producto" />
                <h4 className="subTittleOpen">{item.detail}</h4>
                <h2 className="tittleOpen">${item.price}</h2>
                {irAlCarrito ? (
                    <>
                        <Link to="/CART"><button type="button" class="btn btn-dark" onClick={onFinish}>Terminar Compra</button></Link>
                    </>
                ) : (
                    <>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                    </>
                )}
                {cartCont.isInCart(item.id) ? <p>Este item ya se encuentra en el carrito</p> : <p>Este item no se encuentra en el carrito</p>}
            </div>
        </div>
    );
};

