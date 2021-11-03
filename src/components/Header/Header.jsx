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
                        <li><a>Inicio</a></li>
                        <li><a>Cartografias</a></li>
                        <li><a>Gps</a></li>
                        <li><a>Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header