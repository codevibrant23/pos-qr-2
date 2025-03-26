"use client";

import { useCart } from "@/context/CartContext";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";
import React from "react";

export default function AddToCartButton({ size, data: product }) {
  const { getItemQuantity, addItem, decrementItem } = useCart();
  const qty = getItemQuantity(product?.id);

  return (
    <>
      {!qty || qty < 1 ? (
        <Button
          size={size}
          variant="outline"
          colorPalette="orange"
          bgColor="white"
          onClick={() => {
            addItem(product);
          }}
          borderRadius="lg"
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
          gap={1}
        >
          <IconButton
            borderStartRadius={20}
            borderEndRadius={0}
            onClick={() => {
              addItem(product);
            }}
          >
            <Plus />
          </IconButton>
          <Button
            variant="subtle"
            borderRadius="lg"
            // onClick={(e) => {
            //   e.stopPropagation();
            //   onClick();
            // }}
          >
            {qty}
          </Button>
          <IconButton
            borderStartRadius={0}
            borderEndRadius={20}
            onClick={() => {
              decrementItem(product);
            }}
          >
            <Minus />
          </IconButton>
        </ButtonGroup>
      )}
    </>
  );
}
