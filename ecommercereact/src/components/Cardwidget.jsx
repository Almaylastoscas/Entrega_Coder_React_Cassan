import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CardWidget = () => {
  return (
    <a href="#" class="flex">
      {" "}
      <ShoppingCartIcon color="primary" fontSize="large"></ShoppingCartIcon>
      <h4 style={{ color: "white" }}>3</h4>
    </a>
  );
};

export default CardWidget;
