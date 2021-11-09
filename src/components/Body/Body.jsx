import './index.css'
import iconoImg from '../../../src/iconoGps.png'
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
                <ItemListContainer textoDigo='NAVEGA SEGURO CON REPCOM' />
                <h3>Encontra equipos y cartografias de calidad</h3>
            </div>
            <p></p>
            <p></p>
            <button type="button" class="btn btn-secondary">Ingresar a repcom</button>


        </div>

    )
}

export default Body