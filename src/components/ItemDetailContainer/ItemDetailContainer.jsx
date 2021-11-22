import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { products } from '../Items/Items';


const ItemDetailContainer = ({ }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        getItems
            .then((res) => {
                setItems(res);
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <ItemDetail items={items} />
        </>
    );
};

export default ItemDetailContainer;
