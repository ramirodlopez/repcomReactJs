import './index.css'
import logoImg from '../../../src/logitoasd.png'
import carritoImg from '../../../src/carrito.png'

const Header = () => {
    return (
        <header>
            <div className="container">
                <img
                    className="logito"
                    src={logoImg}
                    alt=""
                />
                <nav>
                    <ul>
                        <li><a href="#/">Inicio</a></li>
                        <li><a href="#/">Cartografias</a></li>
                        <li><a href="#/">Gps</a></li>
                        <li><a href="#/">Contacto</a></li>
                    </ul>
                </nav>
                <img
                    className="carrito"
                    src={carritoImg}
                    alt=""
                />
            </div>
        </header>
    )
}

export default Header