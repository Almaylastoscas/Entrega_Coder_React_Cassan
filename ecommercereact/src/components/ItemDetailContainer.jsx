import React, { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail";

const InitialProduct = {
  id: 9,
  nombre: "Zapatilla Nike pro Future",
  descripcion:
    "Zapatilla deportiva Nike , Con suspensores para amortiguer el rebote ",
  precio: 5900,
  img: "./img09.jpg",
  cantidad: 1,
};
const promesa = new Promise((res, rej) => {
  res(InitialProduct);
  rej("Hay un error");
});

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  useEffect(() => {
    setTimeout(() => {
      promesa.then((data) => setProducto(data));
    }, 2000);
  }, []);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
