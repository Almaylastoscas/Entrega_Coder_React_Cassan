import "./App.css";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import ItensListContainer from "./Containers/ItensListCantainer";
import Carrito from "./components/Carrito";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContexProvider from "./contex/ContexProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContexProvider>
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
        </ContexProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
