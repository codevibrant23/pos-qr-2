import React from "react";
import CartItem from "../cards/CartItem";

export default function CartItemsList({ items }) {
  return (
    <>
      {items.map((p, i) => {
        return <CartItem key={i} product={p} />;
      })}
    </>
  );
}
