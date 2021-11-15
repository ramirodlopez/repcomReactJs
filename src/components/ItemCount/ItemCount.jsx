import { useState } from 'react'
import './index.css'

const ItemCount = () => {

    const [number, setNumber] = useState(0)

    const incrementar = () => {
        setNumber(number + 1)
    }

    const decrementar = () => {
        if (number > 0) {
            setNumber(number - 1)
        }
    }
    return (

        <div>
            <h3>Contador</h3>
            <h3 className="contenedor">{number}</h3>
            <div className="contenedor">
                <button type="button" class="btn btn-dark" onClick={incrementar}>+</button>
                <button type="button" class="btn btn-dark" onClick={decrementar}>-</button>
            </div>
        </div >


    );

}



export default ItemCount