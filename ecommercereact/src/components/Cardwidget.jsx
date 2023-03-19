import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { custonContex } from "../contex/ContexProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CardWidget = () => {
  const { getTotalProductos } = useContext(custonContex);
  return (
    <Link to="/carrito" className="flex">
      <ShoppingCartIcon color="primary" fontSize="large"></ShoppingCartIcon>
      <h4 style={{ color: "white" }}>{getTotalProductos()}</h4>
    </Link>
  );
};

export default CardWidget;
