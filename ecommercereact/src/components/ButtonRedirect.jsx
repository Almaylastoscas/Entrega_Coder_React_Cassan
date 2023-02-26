import React from "react";
import { Link } from "react-router-dom";

const ButtonRedirect = () => {
  return (
    <Link to={"/carrito"}>
      <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Finalizar compra
      </button>
    </Link>
  );
};

export default ButtonRedirect;
