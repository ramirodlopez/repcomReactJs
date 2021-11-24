import './index.css'
import logoImg from '../../../src/assets/logitoasd.png'
import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'


export const NavBar = () => {

    const categories = [
        { id: 'asfadd', address: '/', text: 'HOME' },
        { id: '123asf', address: '/category/CARTAS', text: 'CARTAS' },
        { id: 'sgs3q3', address: '/category/GPS', text: 'GPS' },
    ];

    return (
        <header>
            <div className="containerGlobal">
                <Link to="/">
                    <img
                        className="logito"
                        src={logoImg}
                        alt=""
                    />
                </Link>
                <section className="container">
                    {categories.map((cat) => {
                        return (
                            <div >
                                <div key={cat.id}>
                                    <NavLink to={cat.address} className={({ isActive }) => (isActive ? 'activeClass' : '')}>{cat.text}</NavLink>
                                </div>
                            </div>
                        );
                    })}
                </section>
                <CartWidget />
            </div>
        </header>
    );
};