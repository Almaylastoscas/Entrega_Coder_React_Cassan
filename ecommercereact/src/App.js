import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItensListContainer from "./components/ItensListCantainer";
import Carrito from "./components/Carrito";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItensListContainer
                greeting={"Tienda Ecommerce Zapatillas AlmayDeportes"}
              />
            }
          />
          <Route
            path="/categoria/:name"
            element={
              <ItensListContainer
                greeting={"Tienda Ecommerce Zapatillas AlmayDeportes"}
              />
            }
          />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
