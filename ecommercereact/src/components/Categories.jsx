import React from "react";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div>
      <Link
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        to={"categoria/deporte"}
      >
        Deporte
      </Link>
      <Link
        to={"categoria/urbana"}
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Urbana
      </Link>
      <Link
        to={"categoria/vestir"}
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Vestir
      </Link>
    </div>
  );
};

export default Categories;
