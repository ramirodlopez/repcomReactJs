import React, { useState, useEffect, useContext } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { products } from "../Items/Items";
import { useParams } from "react-router-dom";
import "./index.css";
import { CartContext } from "../../context/CartContext/CartContext";
import { getProducts } from "../../firebase/firebase";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const { itemId } = useParams();
  const [cantProduct, setCantProduct] = useState(0);
  const cartCon = useContext(CartContext);

  useEffect(() => {
    setIsLoading(true);

    getProducts()
      .then((result) => {
        itemId && setProduct(result.find((item) => item.id === itemId));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  const onAdd = (cantidad) => {
    console.log(cantidad, product);
    console.log({ ...product, quantity: cantidad });
    setIrAlCarrito(true);
    setCantProduct(cantidad);
  };

  const onFinish = () => {
    cartCon.addItem(product, cantProduct);
    setProduct({});
    setCantProduct(0);
  };

  return isLoading ? (
    <div className="loading">
      <div class="d-flex justify-content-center">
        <div class="spinner-grow text-secondary" role="status"></div>
      </div>
      <h1 className="textLoading">Loading...</h1>
    </div>
  ) : (
    <ItemDetail
      item={product}
      onAdd={onAdd}
      irAlCarrito={irAlCarrito}
      onFinish={onFinish}
    />
  );
};
