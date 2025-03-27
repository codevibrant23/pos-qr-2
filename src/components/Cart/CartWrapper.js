"use client";

import React, { useState } from "react";
import {
  Button,
  CloseButton,
  DrawerActionTrigger,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerPositioner,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  Flex,
  Portal,
  Text,
} from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useCart } from "@/context/CartContext";
import CartItemsList from "./CartItemsList";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CartWrapper() {
  const [open, setOpen] = useState(false);
  const { cart, totalCartQuantity, totalCartAmount } = useCart();
  const { outlet } = useParams();
  if (totalCartQuantity == 0) return;

  return (
    <div className="static">
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} size="xl">
        <DrawerTrigger asChild>
          <Button
            bg="orange.400"
            minH="52px"
            w="full"
            boxShadow="md"
            transition="all 0.2s ease-in-out"
            _hover={{
              bg: "orange.500",
              transform: "scale(1.02)",
            }}
          >
            <Flex justify="center" align="center" gap={4} w="full" p={4}>
              <Text fontSize="md" fontWeight="medium" color="white">
                {totalCartQuantity} Items
              </Text>
              <Text fontSize="md" fontWeight="medium" color="white">
                Rs. {totalCartAmount}
              </Text>
              <FaArrowRightLong size={18} color="white" />
            </Flex>
          </Button>
        </DrawerTrigger>
        <Portal>
          {/* <DrawerBackdrop /> */}
          <DrawerPositioner padding="2">
            <DrawerContent borderRadius="xl">
              <DrawerHeader display="flex" justifyContent="space-between">
                <DrawerTitle>Cart</DrawerTitle>
                <DrawerCloseTrigger asChild>
                  <CloseButton size="sm" />
                </DrawerCloseTrigger>
              </DrawerHeader>
              <DrawerBody px={2} py={0}>
                <CartItemsList items={cart} />
              </DrawerBody>
              <DrawerFooter p={2}>
                <DrawerCloseTrigger asChild>
                  <Button
                    variant="outline"
                    colorPalette="orange"
                    borderRadius="xl"
                  >
                    Cancel
                  </Button>
                </DrawerCloseTrigger>
                <DrawerActionTrigger asChild flex={1}>
                  <Button colorPalette="orange" borderRadius="xl" asChild>
                    <Link href={`/${outlet}/checkout`}>Checkout</Link>
                  </Button>
                </DrawerActionTrigger>
              </DrawerFooter>
            </DrawerContent>
          </DrawerPositioner>
        </Portal>
      </DrawerRoot>
    </div>
  );
}
