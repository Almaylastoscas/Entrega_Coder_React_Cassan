import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
const CardWidget = () => {
  return (
    <a href="#" className="flex">
      {" "}
      <ShoppingCartIcon color="primary" fontSize="large"></ShoppingCartIcon>
      <h4 style={{ color: "white" }}>3</h4>
    </a>
  );
};

export default CardWidget;
