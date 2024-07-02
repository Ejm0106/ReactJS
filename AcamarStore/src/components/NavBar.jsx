import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col"><img src="images/acamara_store_logotipo_dorado.png" alt="Logo-Acamar" width={150} /></div>
                <div className="col"><ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">Carcasas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">Laminas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">Electronica</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">Contacto</a>
                    </li>
                </ul></div>
                <div className="col">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar