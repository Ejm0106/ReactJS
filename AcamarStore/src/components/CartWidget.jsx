const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary position-relative"><img src="images/bag.svg" alt="Carrito" width={20}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
        </div>
    )
}

export default CartWidget