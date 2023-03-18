import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { custonContex } from "../contex/ContexProvider";
import { useContext } from "react";

const CardWidget = () => {
  const { getTotalProductos } = useContext(custonContex);
  return (
    <a href="#" className="flex">
      <ShoppingCartIcon color="primary" fontSize="large"></ShoppingCartIcon>
      <h4 style={{ color: "white" }}>{getTotalProductos()}</h4>
    </a>
  );
};

export default CardWidget;
