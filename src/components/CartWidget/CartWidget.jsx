import './index.css'
import carritoImg from '../../../src/assets/carrito.png'

const CartWidget = () => {
    return (
        <div>
            <img
                className="carrito"
                src={carritoImg}
                alt=""
            />
        </div>
    )
}

export default CartWidget