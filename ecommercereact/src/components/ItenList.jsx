import React from "react";
import Item from "./Item";

const ItenList = ({ productos }) => {
  return (
    <div className="md:container md:mx-auto grid grid-cols-3 gap-4 my-1.5 bg-black  ">
      {productos.map((prod) => (
        <div key={prod.id} className="bg-slate-200 ">
          <Item prod={prod} />
        </div>
      ))}
    </div>
  );
};

export default ItenList;
