import Products from "../Products/Products";

function Home(props) {
  let barbells = require(`../../data/barbells.json`);
  let weights = require(`../../data/weights.json`);
  let products = [...barbells, ...weights];
  return (
    <div className="Home">
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

export default Home;
