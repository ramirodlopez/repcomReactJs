import './index.css'
import logo from '../../../src/logitoasd.png'

const Header = () => {
    return (
        <header>
            <div class="container">
                <img
                    class="logito"
                    src={logo}
                    alt=""
                />
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Cartografias</a></li>
                        <li><a href="#">Gps</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header