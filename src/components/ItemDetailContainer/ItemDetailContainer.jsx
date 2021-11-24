import React, { useState, useEffect } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { products } from '../Items/Items';
import { useParams } from 'react-router-dom';
import './index.css'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const getProduct = new Promise((res) => {
            setTimeout(() => {
                res(products);
            }, 1000);
        });

        getProduct
            .then((result) => {
                itemId && setProduct(result.find((item) => item.id === itemId));
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [itemId]);

    return isLoading ? <div className="loading">
        <div class="d-flex justify-content-center">
            <div class="spinner-grow text-secondary" role="status">
            </div>
        </div>
        <h1 className="textLoading">Loading...</h1>
    </div > : <ItemDetail {...product} />;
};


