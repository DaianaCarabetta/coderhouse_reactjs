import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetails from "./Components/ItemDetails/ItemDetails";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<ItemListContainer/>}></Route>
        <Route exact path="/category/:categoryId" element={<ItemListContainer/>}></Route>
        <Route exact path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
