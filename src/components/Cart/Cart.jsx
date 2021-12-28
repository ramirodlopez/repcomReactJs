import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import "./index.css";
import { Link } from "react-router-dom";
import { actualizarStock, createOrder } from "../../firebase/firebase";
import { async } from "@firebase/util";

const Cart = () => {
  const cartCont = useContext(CartContext);
  const [id, setId] = useState(null);
  const [buyerData, setBuyerData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
  });
  const [reenteredEmail, setReenteredEmail] = useState("");

  const setAttribute = (event) => {
    const value = event.target.value;
    const fieldName = event.target.name;

    setBuyerData({ ...buyerData, [fieldName]: value });
  };

  const finishOrder = async () => {
    if (buyerData.email == reenteredEmail) {
      const itemsOrder = cartCont.cartList;
      const totalOrder = cartCont.totalPrice();
      const idOrder = await createOrder(buyerData, itemsOrder, totalOrder);
      setId(idOrder);
      actualizarStock(itemsOrder);
      cartCont.clear();
    } else {
      alert("Los mails son distintos");
    }
  };

  return (
    <div>
      <div className="fonditoCart">
        <h1 className="tittleCart">
          <center>Carrito De Compras</center>
        </h1>
        {cartCont.totalQty() > 0 ? (
          <div className="cardForm">
            <input
              name="firstName"
              className="cardForm"
              placeholder="Nombre"
              onChange={(e) => setAttribute(e)}
            />
            <input
              name="lastName"
              className="cardForm"
              placeholder="Apellido"
              onChange={(e) => setAttribute(e)}
            />
            <input
              name="phone"
              className="cardForm"
              placeholder="Telefono"
              onChange={(e) => setAttribute(e)}
            />

            <input
              name="age"
              placeholder="Edad"
              className="cardForm"
              onChange={(e) => setAttribute(e)}
            />

            <input
              name="email"
              className="cardForm"
              placeholder="Email"
              onChange={(e) => setAttribute(e)}
            />
            <input
              placeholder="Confirme Email"
              className="cardForm"
              onChange={(event) => setReenteredEmail(event.target.value)}
            />

            <button
              type="button"
              class="btn btn-dark"
              onClick={() => cartCont.clear()}
            >
              Vaciar Carrito
            </button>
            <button
              type="button"
              class="btn btn-dark"
              onClick={() => finishOrder()}
            >
              Finalizar Compra
            </button>
          </div>
        ) : (
          <Link to="/category/PRODUCTS">
            <button id="btnB" type="button" className="btn btn-secondary">
              No hay productos en el carrito
            </button>
          </Link>
        )}
        {id === null ? (
          <div>
            <p></p>
          </div>
        ) : (
          <div>
            <h1 className="tittleCart">Su id de compra es: {id} </h1>
          </div>
        )}
        <div>
          {cartCont.cartList.map((product) => (
            <div className="cardCarrito">
              <h2 className="tittleOpen">
                {product.itemQty}
                x
                <img className="imgCart" src={product.itemImg} alt="producto" />
                {product.itemName} ${product.itemQty * product.itemPrice}
                <button
                  id="buttonCart"
                  type="button"
                  class="btn btn-dark"
                  onClick={() => cartCont.removeItem(product.itemId)}
                >
                  Quitar
                </button>
              </h2>
            </div>
          ))}
          <p></p>
          {cartCont.totalQty() > 0 && (
            <h2 className="tittleCart">
              <center>Precio Total: ${cartCont.totalPrice()}</center>
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
