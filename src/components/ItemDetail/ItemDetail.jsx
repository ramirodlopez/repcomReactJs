import React from 'react';
import ItemD from '../ItemD/ItemD';
import './index.css'


const ItemDetail = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <ItemD key={item.id} item={item} />
            ))}
        </>
    );
};

export default ItemDetail;


