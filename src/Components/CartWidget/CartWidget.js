import './CartWidget.css';

function CartWidget() {
    return(
        <button type="button" className="car-widget btn btn-light position-relative">
            <i class="bi bi-cart"></i>
            <span className="position-absolute badge rounded-pill bg-danger">
                +1
            </span>
        </button>
    )
}

export default CartWidget;
