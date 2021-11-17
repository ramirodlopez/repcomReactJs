import { useState } from 'react'
import './index.css'

const ItemCount = (props) => {

    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        if (number < props.stock) {
            setNumber(number + 1)
        }
    }

    const onDecrease = () => {
        if (number > 0) {
            setNumber(number - 1)
        }


    }
    return (

        <div>
            <h3 className="contenedor">{number}</h3>

            <button type="button" id="buttonCard" class="btn btn-dark" onClick={onIncrease}>+</button>
            <button type="button" id="buttonCard" class="btn btn-dark" onClick={onDecrease}>-</button>
            <h5>Stock: {props.stock}</h5>
        </div >


    );

}



export default ItemCount