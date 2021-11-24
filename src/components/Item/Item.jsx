import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './index.css'

export const Item = ({ id, name, category, img, price, stock }) => {
    return (
        <Link to={`/product/${id}`}>
            <div className="cardG cardG__hover">
                <h1 className="tittle">{name}</h1>
                <img src={img} alt="producto" />
                <h2 className="tittle">${price}</h2>
            </div>
        </Link >
    );
};
