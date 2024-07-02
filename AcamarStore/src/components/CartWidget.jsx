const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn btn-light position-relative">
                🛒<span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">1</span>
            </button>
        </div>
    )
}

export default CartWidget