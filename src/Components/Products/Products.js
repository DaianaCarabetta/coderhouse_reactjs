import { Fragment } from "react";
import Product from "../Product/Product";

function Products(props) {
  return (
    <Fragment>
      {props.products.length > 0 ? (
        <div className="row">
          {props.products.map((product) => (
            <div key={product.id} className="col">
              <Product type={props.type} product={product}></Product>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Sin stock!: {props.greeting}</p>
        </div>
      )}
    </Fragment>
  );
}

export default Products;
