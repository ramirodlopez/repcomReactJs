import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './index.css'

const Item = ({ item }) => {
    return (
        <div>
            <div className="cardG cardG__hover">
                <h1 className="tittle">{item.name}</h1>
                <img src={item.img} alt="producto" />
                <h2 className="tittle">${item.price}</h2>
                <button type="button" class="btn btn-dark">Descripcion</button>
                <ItemCount stock={item.stock} />
            </div>
        </div>
    );
};

export default Item;