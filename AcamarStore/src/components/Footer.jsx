const Footer = () => {
    return (
        <div className="container-fluid text-white bg-black py-3">
            <div className="row">
                <div className="col"><p>
                    © 2024 Equinox Chile SpA. Todos los derechos reservados</p></div>
                <div className="col"><ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href="#">Hot Sales</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Términos y Condiciones</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Política de privacidad y Cookies</a>
                    </li>
                </ul></div>
            </div>
        </div>
    )
}

export default Footer