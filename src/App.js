import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Barbells from "./Components/Barbells/Barbells";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Weights from "./Components/Weights/Weights";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const greeting = "Lo sentimos, no hay productos disponibles";

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<Home greeting={greeting} />}></Route>
        <Route
          exact
          path="/barras"
          element={<Barbells greeting={greeting} />}
        ></Route>
        <Route
          exact
          path="/discos"
          element={<Weights greeting={greeting} />}
        ></Route>
        <Route exact path="/product/:type/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
