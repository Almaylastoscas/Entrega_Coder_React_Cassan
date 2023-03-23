import React, { useState, useEffect } from "react";
import ItenList from "../components/ItenList";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { db } from "../firebase/firebase";

import { getDocs, collection, query, where } from "firebase/firestore";

const ItensListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const productsCollection = collection(db, "products");
      const q = name
        ? query(productsCollection, where("categoria", "==", name))
        : productsCollection;

      getDocs(q).then((data) => {
        const list = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProductos(list);
      });
      setLoading(false);
    }, 1000);
  }, [name]);

  return (
    <div className="bg-black ">
      <h1 className="text-2xl text-teal-400 bg-black ">{greeting}</h1>
      {loading ? <Loading /> : <ItenList productos={productos} />}
    </div>
  );
};

export default ItensListContainer;
