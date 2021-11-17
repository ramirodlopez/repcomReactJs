import './index.css'
import iconoImg from '../../../src/assets/iconoGps.png'
import ArticleHeading from '../ArticleHeading/ArticleHeading'
import ItemCount from '../ItemCount/ItemCount'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const Body = () => {
    return (
        <div className="fondito">
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
            <button id="btnB" type="button" className="btn btn-secondary">Ingresar a repcom</button>
            <p></p>
            <p></p>
            <p></p>
            <ItemListContainer />




        </div>

    )
}

export default Body