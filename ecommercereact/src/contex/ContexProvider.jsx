import React, { useState, useEffect, createContext } from "react";

export const custonContex = createContext();

const ContexProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto, stock) => {
    if (productoExistente(producto.id)) {
    } else {
      setCarrito([...carrito, { ...producto, stock }]);
    }
  };

  const eliminarProducto = (id) => {
    carrito.filter((producto) => producto.id !== id);
  };

  const productoExistente = (id) => {
    return carrito.some((producto) => producto.id === id);
  };
  const limpiarCarrito = () => {
    setCarrito([]);
  };
  return (
    <custonContex.Provider
      value={{ carrito, limpiarCarrito, eliminarProducto, agregarProducto }}
    >
      {children}
    </custonContex.Provider>
  );
};

export default ContexProvider;
