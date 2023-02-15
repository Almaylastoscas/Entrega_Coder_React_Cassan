import React, { useState, useEffect } from "react";

const ItensListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch("../data/productos.json")
        .then((response) => response.json())
        .then((produc) => setProductos(produc));
      console.log(productos);
    }, 2000);
  }, []);

  return <h1 className="text-2xl text-white bg-neutral-800 ">{greeting}</h1>;
};

export default ItensListContainer;
