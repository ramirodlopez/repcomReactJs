import React, { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { products } from '../Items/Items';
import { useParams } from 'react-router-dom';
import './index.css'

export const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const { catId } = useParams();

    useEffect(() => {
        setLoader(true);

        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });

        getItems
            .then((res) => {
                catId
                    ? setItems(res.filter((item) => item.category === catId))
                    : setItems(res);
            })
            .finally(() => {
                setLoader(false);
            });
    }, [catId]);

    return loader ? (
        <h1>CARGANDO...</h1>
    ) : (
        <>
            <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
            <ItemList items={items} />
        </>
    );
};


