import CartWrapper from "@/components/Cart/CartWrapper";
import React from "react";

export default function OutletMainLayout({ children }) {
  return (
    <div>
  
      <div>{children}</div>
      <div className="bottom-0 left-0 w-screen fixed z-10">
        <CartWrapper />
      </div>
    </div>
  );
}
