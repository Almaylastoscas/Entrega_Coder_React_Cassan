import React from "react";
import { custonContex } from "../contex/ContexProvider";
import { useContext } from "react";

const Carrito = () => {
  const { carrito } = useContext(custonContex);
  console.log(carrito);
  return (
    <div>
      {carrito.map((el) => (
        <>
          <h1 key={el.id}>{el.nombre}</h1>
        </>
      ))}
    </div>
  );
};

export default Carrito;
