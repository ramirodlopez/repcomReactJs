import './index.css'
import logoImg from '../../../src/assets/logitoasd.png'
import CartWidget from '../CartWidget/CartWidget'

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
                <CartWidget />
            </div>
        </header>
    )
}

export default Header