import React, { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { products } from '../Items/Items';
import { useParams } from 'react-router-dom';
import './index.css'
import { getProducts } from '../../firebase/firebase';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const { catId } = useParams();

    useEffect(() => {
        setLoader(true);

        getProducts()
            .then((result) =>
                result.sort((product1, product2) => { return product1.id - product2.id })
            )
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
        <div className="loading">
            <div class="d-flex justify-content-center">
                <div class="spinner-grow text-secondary" role="status">
                </div>
            </div>
            <h1 className="textLoading">Loading...</h1>
        </div >
    ) : (
        <ItemList items={items} />
    );
};


