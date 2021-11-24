import './index.css'
import iconoImg from '../../../src/assets/iconoGps.png'
import ArticleHeading from '../ArticleHeading/ArticleHeading'
import { Link } from 'react-router-dom';



const Body = () => {

    return (
        <div className="fonditoBody">
            <p></p>
            <img
                className="iconoGps"
                src={iconoImg}
                alt=""
            />
            <p></p>
            <p></p>
            <div>
                <ArticleHeading greeting='NAVEGA SEGURO CON REPCOM' />
                <h3 className="subTittle">Encontra equipos y cartografias de calidad</h3>
            </div>
            <p></p>
            <p></p>
            <Link to="/category/CARTAS">
                <button id="btnB" type="button" className="btn btn-secondary">Ingresar a repcom</button>
            </Link>
        </div>

    )
}

export default Body