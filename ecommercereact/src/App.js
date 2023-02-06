import "./App.css";
import ItensListContainer from "./components/ItensListCantainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItensListContainer
        greeting={"Tienda Ecommerce Zapatillas AlmayDeportes"}
      />
    </div>
  );
}

export default App;
