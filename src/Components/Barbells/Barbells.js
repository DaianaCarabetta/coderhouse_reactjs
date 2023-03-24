import Products from "../Products/Products";

function Barbells(props) {
  let type = "barbells";
  let products = require(`../../data/${type}.json`);
  return (
    <div className="Barbells">
      <div className="d-flex flex-column min-vh-100 min-vw-100">
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
          <Products
            greeting={props.greeting}
            type="barbells"
            products={products}
          ></Products>
        </div>
      </div>
    </div>
  );
}

export default Barbells;
