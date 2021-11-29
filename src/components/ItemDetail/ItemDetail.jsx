import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './index.css'


export const ItemDetail = ({ id, name, category, img, price, detail, stock, onAdd, irAlCarrito }) => {
    return (
        <div>
            <div className="cardGOpen">
                <h1 className="tittleOpen">{name}</h1>
                <img src={img} alt="producto" />
                <h4 className="subTittleOpen">{detail}</h4>
                <h2 className="tittleOpen">${price}</h2>
                {irAlCarrito ? (
                    <>
                        <Link to="/CART"><button type="button" class="btn btn-dark">Terminar Compra</button></Link>
                    </>
                ) : (
                    <>
                        <ItemCount stock={stock} onAdd={onAdd} />
                    </>
                )}
            </div>
        </div>
    );
};

