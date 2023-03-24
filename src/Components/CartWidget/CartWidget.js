import { Button } from "./Button";

function CartWidget(props) {
  return (
    <Button
      marginRight={props.marginRight}
      type="button"
      className="btn btn-light position-relative"
    >
      <i className="bi bi-cart"></i>
      <span className="position-absolute badge rounded-pill bg-danger">+1</span>
    </Button>
  );
}

export default CartWidget;
