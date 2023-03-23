import React from "react";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <Link to={`/producto/${prod.id}`}>
      <div className="flex justify-center ">
        <div className="rounded-lg shadow-lg bg-lime-200  max-w-sm hover:bg-slate-100  ">
          <img
            className=" rounded-full border-slate-900 border-solid"
            src={prod.img}
            alt="Foto zapatilla  "
          />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {prod.nombre}
            </h5>
            <p className="text-gray-700 text-base mb-4">$ {prod.precio}</p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Seleccionar
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
