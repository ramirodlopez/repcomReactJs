import './index.css'
import iconoImg from '../../../src/assets/iconoGps.png'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemCount from '../ItemCount/ItemCount'

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
            <ItemCount stock={5} initial={1} />
            <div>
                <ItemListContainer greeting='NAVEGA SEGURO CON REPCOM' />
                <h3>Encontra equipos y cartografias de calidad</h3>
            </div>
            <p></p>
            <p></p>
            <button id="btnB" type="button" className="btn btn-secondary">Ingresar a repcom</button>



        </div>

    )
}

export default Body