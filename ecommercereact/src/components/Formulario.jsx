import React, { useState } from "react";
import { custonContex } from "../contex/ContexProvider";
import { useContext } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const initialState = {
  nombre: "",
  apellido: "",
};
const Formulario = () => {
  const [cliente, setCliente] = useState(initialState);
  const [idCompra, setIdCompra] = useState("");
  const { totalCompra, carrito, limpiarCarrito } = useContext(custonContex);
  const navigate = useNavigate();
  const handleReset = () => {
    setCliente(initialState);
  };

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sellCollection = collection(db, "clientes");
    addDoc(sellCollection, {
      cliente,
      items: carrito,
      total: totalCompra(),
      time: serverTimestamp(),
    }).then((result) => setIdCompra(result.id));
  };

  if (idCompra !== "") {
    Swal.fire({
      title: `su pedido se ha procesado con exito  `,
      text: `El id de su compra es (${idCompra})`,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        limpiarCarrito();
        handleReset();
        navigate("/");
      }
    });
  }

  return (
    <div className="content-center justify-center flex h-screen ">
      <div className="w-full max-w-xs ">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Nombre
            </label>
            <input
              value={cliente.nombre}
              name="nombre"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Apellido
            </label>
            <input
              value={cliente.apellido}
              name="apellido"
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Apellido"
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Cerrar Compra
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
