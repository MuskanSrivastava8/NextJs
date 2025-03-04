"use client";
import { useEffect, useState } from "react";

export default function Productlist() {
  const [listitem, setListitem] = useState([]);
  useEffect(() => {
    async function check() {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      console.log(data);
      setListitem(data.products);
    }
    check();
  }, []);
  return (
    <>
      ProductList
      {listitem != undefined && listitem.map((i) => {
        return <li>{i.title}</li>;
      })}
    </>
  );
}
