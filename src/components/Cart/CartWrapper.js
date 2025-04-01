"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  CloseButton,
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerPositioner,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  Field,
  HStack,
  Input,
  Portal,
  Separator,
} from "@chakra-ui/react";
import { useCart } from "@/context/CartContext";
import CartItemsList from "./CartItemsList";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Trash2 } from "lucide-react";
import CartButtonTrigger from "./CartButtonTrigger";

export default function CartWrapper() {
  const [open, setOpen] = useState(false);
  const { cart, totalCartQuantity, totalCartAmount, clearCart } = useCart();
  const { outlet } = useParams();
  if (totalCartQuantity == 0) return;

  return (
    <div className="static">
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} size="xl">
        <DrawerTrigger asChild>
          <CartButtonTrigger
            totalCartAmount={totalCartAmount}
            totalCartQuantity={totalCartQuantity}
          />
        </DrawerTrigger>
        <Portal>
          <DrawerBackdrop />
          <DrawerPositioner padding="4">
            <DrawerContent borderRadius="xl">
              <DrawerHeader
                display="flex"
                justifyContent="space-between"
                px={4}
              >
                <DrawerTitle>Cart</DrawerTitle>
                <HStack alignItems="center" gap={2}>
                  <DrawerCloseTrigger asChild>
                    <Button
                      variant="subtle"
                      colorPalette="red"
                      size="sm"
                      borderRadius="full"
                      onClick={clearCart}
                    >
                      <Trash2 /> Clear
                    </Button>
                  </DrawerCloseTrigger>
                  <DrawerCloseTrigger asChild>
                    <CloseButton size="sm" />
                  </DrawerCloseTrigger>
                </HStack>
              </DrawerHeader>
              <DrawerBody py={0} px={4}>
                <CartItemsList items={cart} />
              </DrawerBody>
              <DrawerFooter flexDirection="column" p={2}>
                <Separator color="gray.100" w="full"/>

                <Box w="full" px={2}>
                  <Field.Root required>
                    <Field.Label>
                      Name <Field.RequiredIndicator />
                    </Field.Label>
                    <Input placeholder="Enter your name" rounded="xl" />
                  </Field.Root>
                  <Field.Root required>
                    <Field.Label>
                      Contact <Field.RequiredIndicator />
                    </Field.Label>
                    <Input placeholder="Enter your number" rounded="xl" />
                    <Field.HelperText>
                      Paperless bill will be sent to this number.
                    </Field.HelperText>
                    <Field.ErrorText>This field is required</Field.ErrorText>
                  </Field.Root>
                </Box>
                <Separator color="gray.100" w="full"/>
                <HStack gap={2} w="full">
                  <DrawerCloseTrigger asChild>
                    <Button
                      variant="outline"
                      colorPalette="orange"
                      borderRadius="xl"
                    >
                      Close
                    </Button>
                  </DrawerCloseTrigger>
                  <DrawerActionTrigger asChild flex={1}>
                    <Button colorPalette="orange" borderRadius="xl" asChild>
                      <Link href={`/${outlet}/checkout`}>Checkout</Link>
                    </Button>
                  </DrawerActionTrigger>
                </HStack>
              </DrawerFooter>
            </DrawerContent>
          </DrawerPositioner>
        </Portal>
      </DrawerRoot>
    </div>
  );
}
