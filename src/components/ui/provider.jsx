"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, LightMode } from "./color-mode";
import { CartProvider } from "@/context/CartContext";

export function Provider(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <LightMode>
        <CartProvider>
          <ColorModeProvider {...props} />
        </CartProvider>
      </LightMode>
    </ChakraProvider>
  );
}
