import Products from "../Products/Products";

function Weights(props) {
  let type = "weights";
  let products = require(`../../data/${type}.json`);
  return (
    <div className="Weights">
      <div className="d-flex flex-column min-vh-100 min-vw-100">
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
          <Products
            greeting={props.greeting}
            type="weights"
            products={products}
          ></Products>
        </div>
      </div>
    </div>
  );
}

export default Weights;
