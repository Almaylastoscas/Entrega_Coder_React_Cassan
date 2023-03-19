import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, collection } from "firebase/firestore";
import ItemDetail from "../components/ItemDetail";
import Loading from "../components/Loading";
import { db } from "../firebase/firebase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsCollection = collection(db, "products");
    const refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((data) => {
      setProducto({
        id: data.id,
        ...data.data(),
      });
    });
    setLoading(false);
  }, [id]);

  return (
    <div className="content-center justify-center items-center flex bg-slate-200 h-screen">
      {loading ? <Loading /> : <ItemDetail producto={producto} />}
    </div>
  );
};

export default ItemDetailContainer;
