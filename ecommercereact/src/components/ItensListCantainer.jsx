import React, { useState, useEffect } from "react";
import ItenList from "./ItenList";
import { useParams } from "react-router-dom";

const initialData = [
  {
    id: 1,
    categoria: "deporte",
    nombre: "Zapatilla Nike pro",
    precio: 5200,
    img: "./img01.jpg",
    cantidad: 1,
  },
  {
    id: 2,
    categoria: "deporte",
    nombre: "Zapatilla Nike Static",
    precio: 9333,
    img: "  ./img02.jpg",
    cantidad: 1,
  },
  {
    id: 3,
    categoria: "deporte",
    nombre: "Zapatilla Nike XWM",
    precio: 4587,
    img: " ./img03.jpg",
    cantidad: 1,
  },
  {
    id: 4,
    Categoria: "urbana",
    nombre: "Zapatilla Nike pro Ultra",
    precio: 6792,
    img: "./Nike.jpg",
    cantidad: 1,
  },
  {
    id: 5,
    Categoria: "urbana",
    nombre: "Zapatilla Nike Dport",
    precio: 7980,
    img: "./img05.jpg",
    cantidad: 1,
  },
  {
    id: 6,
    Categoria: "urbana",
    nombre: "Zapatilla Nike pro",
    precio: 7390,
    img: "./img06.jpg",
    cantidad: 1,
  },
  {
    id: 7,
    categoria: "vestir",
    nombre: "Zapatilla Nike Sport",
    precio: 8920,
    img: "./img07.jpg",
    cantidad: 1,
  },
  {
    id: 8,
    categoria: "vestir",
    nombre: "Zapatilla Nike Sport max",
    precio: 3800,
    img: "./img08.jpg",
    cantidad: 1,
  },
  {
    id: 9,
    categoria: "vestir",
    nombre: "Zapatilla Nike pro Future",
    precio: 5900,
    img: "./img09.jpg",
    cantidad: 1,
  },
];

const promesa = new Promise((res, rej) => {
  res(initialData);
  rej("Hay un error");
});
const ItensListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    setTimeout(() => {
      promesa.then((data) => {
        if (name) {
          setProductos(data.filter((item) => item.categoria === name));
        } else {
          setProductos(data);
        }
      });
    }, 2000);
  }, [name]);

  return (
    <>
      <h1 className="text-2xl text-white bg-neutral-800 ">{greeting}</h1>
      <ItenList productos={productos} />
    </>
  );
};

export default ItensListContainer;
