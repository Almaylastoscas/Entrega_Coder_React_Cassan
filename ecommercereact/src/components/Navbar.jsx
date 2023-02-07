import React from "react";
import Categories from "./Categories";
import CardWidget from "./Cardwidget";

const Navbar = () => {
  return (
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <a href="#">
            <img class="hidden h-8 w-auto lg:block" src="./logo-almay.png" />
          </a>
          <div class="flex flex-1 items-center content-center justify-center sm:items-stretch   ">
            <div class="hidden sm:ml-6  sm:block">
              <div class="flex  space-x-6 ">
                <Categories />
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <CardWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
