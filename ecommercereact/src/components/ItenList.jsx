import React from "react";
import Item from "./Item";

const ItenList = ({ productos }) => {
  return (
    <div class="md:container md:mx-auto grid grid-cols-3 gap-1 my-1.5  ">
      {productos.map((prod) => (
        <div>
          <Item prod={prod} />
        </div>
      ))}
    </div>
  );
};

export default ItenList;
