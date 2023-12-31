"use client";
import NavBar from "@/Components/NavBar";
import React from "react";
import CartProduct from "./Components/CartProduct";
import { cd } from "@/Components/Product";
import Payment from "./Components/Payment";

const page = () => {
  let keyarr = [];
  let newcd = [];
  for (let i = cd.length - 1; i >= 0; i--) {
    if (!keyarr.includes(cd[i].Key)) {
      newcd.push(cd[i]);
      keyarr.push(cd[i].Key);
    } else {
      continue;
    }
  }
  console.log(newcd);
  const items = newcd.map((item) => {
    return <CartProduct key={item.Key} products={item} />;
  });
  return (
    <div>
      <NavBar />
      <div className="h-full w-full flex items-center">
      <div className="flex gap-4 items-center flex-wrap h-screen w-[75%] border-2 border-r-zinc-800">{items}</div>
      <div className="h-screen w-[25%]"><Payment details = {newcd}/></div>
      </div>
      </div>
  );
};

export default page;
