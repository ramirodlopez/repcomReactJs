import { useState } from 'react'
import './index.css'

const ItemCount = ({ stock, onAdd }) => {

    const [number, setNumber] = useState(1)

    const onIncrease = () => {
        number !== stock && setNumber(number + 1);
    }

    const onDecrease = () => {
        number !== 0 && setNumber(number - 1);

    }
    return (

        <div>
            <h3 className="contenedor">{number}</h3>
            <button type="button" id="buttonCard" class="btn btn-dark" onClick={onDecrease}>-</button>
            <button type="button" id="buttonCard" class="btn btn-dark" onClick={onIncrease}>+</button>
            <button type="button" class="btn btn-dark" disabled={number === 0} onClick={() => onAdd(number)}>
                Agregar al carrito
            </button>
            <h5>Stock: {stock}</h5>
        </div >


    );

}



export default ItemCount