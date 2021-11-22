import React from 'react';
import './index.css'

const ItemD = ({ item }) => {
    return (
        <div>
            <div className="cardG cardG__hover">
                <h1 className="tittle">{item.name}</h1>
                <img src={item.img} alt="producto" />
                <h4>{item.detail}</h4>
                <h2 className="tittle">${item.price}</h2>
            </div>
        </div>
    );
};

export default ItemD;