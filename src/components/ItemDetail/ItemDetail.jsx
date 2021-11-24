import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './index.css'

export const ItemDetail = ({ id, name, category, img, price, detail, stock }) => {
    return (
        <div>
            <div className="cardGOpen">
                <h1 className="tittleOpen">{name}</h1>
                <img src={img} alt="producto" />
                <h4 className="subTittleOpen">{detail}</h4>
                <h2 className="tittleOpen">${price}</h2>
                <ItemCount stock={stock} />
            </div>
        </div>
    );
};

