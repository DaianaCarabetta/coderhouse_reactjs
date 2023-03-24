import React from "react";
import { useParams } from "react-router-dom";
import SlideShow from "../SlideShow/SlideShow";

function ProductDetails(props) {
  let { id, type } = useParams();
  let data = require(`../../data/${type}.json`);
  let product = data[id];
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <SlideShow images={product.images}/>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <div className="mt-4 mb-3">
                    <span className="text-uppercase text-muted brand">
                      {product.brand}
                    </span>
                    <h5 className="text-uppercase">{product.title}</h5>
                    <div className="price d-flex flex-row align-items-center">
                      <span className="act-price">${product.price}</span>
                    </div>
                  </div>
                  <p className="about">{product.description}</p>

                  <div className="cart mt-4 align-items-center">
                    <button className="btn btn-danger text-uppercase mr-2 px-4">
                      Agregar al carrito
                    </button>
                    <i className="fa fa-heart text-muted"></i>
                    <i className="fa fa-share-alt text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;