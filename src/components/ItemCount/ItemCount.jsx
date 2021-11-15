import { useState } from 'react'
import './index.css'

const ItemCount = (props) => {

    const [number, setNumber] = useState(props.initial)

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
            <p>Contador</p>
            <p>Stock={props.stock}</p>
            <p>Initial={props.initial}</p>
            <h3 className="contenedor">{number}</h3>
            <div className="contenedor">
                <button type="button" class="btn btn-dark" onClick={onIncrease}>+</button>
                <button type="button" class="btn btn-dark" onClick={onDecrease}>-</button>
            </div>
        </div >


    );

}



export default ItemCount