import React from "react";
import Item from "./Item";

const ItenList = ({ productos }) => {
  return (
    <div className="md:container md:mx-auto grid grid-cols-3 gap-4 my-1.5bg-slate-200  ">
      {productos.map((prod) => (
        <div className="bg-slate-200 ">
          <Item prod={prod} />
        </div>
      ))}
    </div>
  );
};

export default ItenList;
