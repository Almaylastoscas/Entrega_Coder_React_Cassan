import React from "react";
import { custonContex } from "../contex/ContexProvider";
import { useContext } from "react";

const Carrito = () => {
  const { carrito, limpiarCarrito, eliminarProducto, totalCompra } =
    useContext(custonContex);

  return (
    <div className="content-center justify-center h-screen ">
      {carrito.map((el) => (
        <div className="justify-center">
          <div className="mx-10 pt-15 justify-center ">
            <div className="grid gap-6 mb-8 md:grid-cols-1 justify-centers ">
              <div className="min-w-0 p-4 text-white bg-black rounded-lg shadow-xs  ">
                <h4 className="mb-4 font-semibold" key={el.id}>
                  {el.nombre}
                </h4>

                <img src={el.img} className="h-20 w-30 " />
                <div className="flex content-center justify-center space-x-4  ">
                  <p> Cantidad : {el.contador}</p>
                  <p> Precio: $ {el.precio}</p>
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => eliminarProducto(el.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={limpiarCarrito}
      >
        Vaciar carrito
      </button>
      <h1>{totalCompra()}</h1>
    </div>
  );
};

export default Carrito;
