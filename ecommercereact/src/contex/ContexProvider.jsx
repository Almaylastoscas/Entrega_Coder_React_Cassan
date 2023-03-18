import React, { useState, createContext } from "react";

export const custonContex = createContext();

const ContexProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto, contador) => {
    if (productoExistente(producto.id)) {
      setCarrito(
        carrito.map((product) =>
          product.id === producto.id
            ? { ...product, contador: product.contador + contador }
            : product
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, contador }]);
    }
  };

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  const productoExistente = (id) => {
    return carrito.some((producto) => producto.id === id);
  };
  const limpiarCarrito = () => {
    setCarrito([]);
  };
  const getTotalProductos = () => {
    let cant = null;
    carrito.forEach((e) => (cant += e.contador));
    return cant;
  };

  const totalCompra = () => {
    let total = 0;
    carrito.forEach((e) => (total += e.contador * e.precio));
    return total;
  };

  return (
    <custonContex.Provider
      value={{
        carrito,
        limpiarCarrito,
        eliminarProducto,
        agregarProducto,
        totalCompra,
        getTotalProductos,
      }}
    >
      {children}
    </custonContex.Provider>
  );
};

export default ContexProvider;
