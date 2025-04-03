"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";
import React from "react";
import VariantDialog from "./VariantDialog";

export default function AddToCartButton({ size = "sm", data: product }) {
  const { getItemQuantity, addItem, decrementItem } = useCart();
  const [open, setOpen] = useState(false);
  const qty = getItemQuantity(product?.id);

  // Helper function: if variants exist, open dialog; else, add item directly.
  const handleAddItem = () => {
    if (product?.variants && product.variants.length > 0) {
      setOpen(true);
    } else {
      addItem(product);
    }
  };

  return (
    <>
      {product?.variants?.length > 0 && (
        <VariantDialog open={open} setOpen={setOpen} product={product} />
      )}
      <>
        {!qty || qty < 1 ? (
          <Button
            size={size}
            minW={62}
            variant="outline"
            colorPalette="orange"
            bgColor="white"
            onClick={handleAddItem}
            borderRadius="lg"
          >
            Add
          </Button>
        ) : (
          <ButtonGroup
            size={size}
            variant="outline"
            colorPalette="orange"
            bgColor="white"
            gap={1}
          >
            <IconButton
              borderStartRadius={20}
              borderEndRadius={0}
              onClick={() => {
                decrementItem(product);
              }}
            >
              <Minus />
            </IconButton>
            <Button variant="subtle" borderRadius="lg">
              {qty}
            </Button>
            <IconButton
              borderStartRadius={0}
              borderEndRadius={20}
              onClick={handleAddItem}
            >
              <Plus />
            </IconButton>
          </ButtonGroup>
        )}
      </>
    </>
  );
}
