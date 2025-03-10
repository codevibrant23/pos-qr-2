import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";
import React from "react";

export default function AddToCartButton({ flag, size }) {
  return (
    <>
      {flag ? (
        <Button
          size={size}
          variant="outline"
          colorPalette="orange"
          bgColor="white"
          //   onClick={(e) => {
          //     e.stopPropagation();
          //     onClick();
          //   }}
        >
          Add
        </Button>
      ) : (
        <ButtonGroup
          size={size}
          //   attached
          variant="outline"
          colorPalette="orange"
          bgColor="white"
          gap={0}
        >
          <IconButton borderStartRadius="xl" borderEndRadius={0}>
            <Minus />
          </IconButton>
          <Button
            borderRadius={0}
            // onClick={(e) => {
            //   e.stopPropagation();
            //   onClick();
            // }}
          >
            QTY
          </Button>
          <IconButton borderStartRadius={0} borderEndRadius="xl">
            <Plus />
          </IconButton>
        </ButtonGroup>
      )}
    </>
  );
}
