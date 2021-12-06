import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCart] = useState([]);


    const addItem = (item, qty) => {
        let same = cartList.find(produc => produc.itemId === item.id);
        if (same === undefined) {
            setCart([
                ...cartList,
                {
                    itemId: item.id,
                    itemName: item.name,
                    itemPrice: item.price,
                    itemImg: item.img,
                    itemQty: qty
                }
            ])
        }
        else {
            same.itemQty += qty;
            setCart([...cartList]);
        }
        console.log(cartList);
    };

    const clear = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        let result = cartList.filter((item) => item.itemId !== id);
        setCart(result);
    };

    const isInCart = (id) => {
        return cartList.some((item) => item.itemId == id)
    };

    const totalQty = () => {
        return cartList.reduce((accumulator, item) => accumulator + item.itemQty, 0)
    }


    return (
        <CartContext.Provider value={{
            addItem,
            removeItem,
            clear,
            isInCart,
            totalQty,
            cartList,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;

