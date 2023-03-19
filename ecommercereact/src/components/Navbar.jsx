import React from "react";
import Categories from "./Categories";
import CardWidget from "./Cardwidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <Link to={"/"}>
            <img
              className="hidden h-8 w-auto lg:block"
              src="./logo-almay.png"
              alt="Zapatilla"
            />
          </Link>
          <div className="flex flex-1 items-center content-center justify-center sm:items-stretch   ">
            <div className="hidden sm:ml-6  sm:block">
              <div className="flex  space-x-6 ">
                <Categories />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to={"/carrito"}>
              <CardWidget />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
