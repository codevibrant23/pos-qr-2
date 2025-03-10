"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, LightMode } from "./color-mode";

export function Provider(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <LightMode>
        <ColorModeProvider {...props} />
      </LightMode>
    </ChakraProvider>
  );
}
