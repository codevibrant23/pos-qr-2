"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";
import React from "react";
import VariantDialog from "./VariantDialog";

export default function AddToCartButton({ size = "sm", data: product }) {
  const {
    cartTrigger: { openCart },
    getItemQuantity,
    addItem,
    decrementItem,
    isProductVariant,
    checkMultipleVaraintsInCart,
  } = useCart();
  const [variantDialog, setOpen] = useState(false);
  const qty = getItemQuantity(product);

  // Helper function: if variants exist, open dialog; else, add item directly.
  const handleAddItem = () => {
    if (product?.variants && product.variants?.length > 0) {
      setOpen(true);
    } else {
      addItem(product);
    }
  };
  const handleAddVariant = (variantId) => {
    addItem(product, variantId);
    setOpen(false);
  };

  const handleRemoveItem = () => {
    if (isProductVariant(product)) {
      decrementItem(product);
    } else {
      if (
        checkMultipleVaraintsInCart(product?.id) ||
        product?.variants?.length > 0
      ) {
        openCart();
      } else {
        decrementItem(product);
      }
    }
  };

  return (
    <>
      {product?.variants?.length > 0 && (
        <VariantDialog
          open={variantDialog}
          setOpen={setOpen}
          product={product}
          addVariant={handleAddVariant}
        />
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
              onClick={handleRemoveItem}
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
