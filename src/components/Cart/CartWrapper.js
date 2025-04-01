"use client";

import React, { useState } from "react";
import {
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
  Flex,
  HStack,
  Portal,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useCart } from "@/context/CartContext";
import CartItemsList from "./CartItemsList";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Trash2 } from "lucide-react";

export default function CartWrapper() {
  const [open, setOpen] = useState(false);
  const { cart, totalCartQuantity, totalCartAmount, clearCart } = useCart();
  const { outlet } = useParams();
  if (totalCartQuantity == 0) return;

  return (
    <div className="static">
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} size="xl">
        <DrawerTrigger asChild>
          <Button
            borderBottomRadius={0}
            bg="orange.400"
            minH="60px"
            w="full"
            boxShadow="md"
            transition="all 0.2s ease-in-out"
            _hover={{
              bg: "orange.500",
              transform: "scale(1.02)",
            }}
          >
            <Flex justify="center" align="center" gap={4} w="full">
              <Text fontSize="md" fontWeight="light" color="white">
                Rs. {totalCartAmount}
              </Text>
              <Separator orientation="vertical" color="white" height="4" />
              <Text fontSize="md" fontWeight="medium" colorPalette="white">
                <span className="fw-semibold">{totalCartQuantity}</span>
                {totalCartQuantity > 0 ? " items " : " item "}
                added
              </Text>
              <BsFillArrowRightCircleFill size={18} color="white" />
            </Flex>
          </Button>
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
                  <Button
                    variant="subtle"
                    colorPalette="red"
                    size="sm"
                    borderRadius="full"
                    onClick={clearCart}
                  >
                    <Trash2 /> Clear
                  </Button>
                  <DrawerCloseTrigger asChild>
                    <CloseButton size="sm" />
                  </DrawerCloseTrigger>
                </HStack>
              </DrawerHeader>
              <DrawerBody py={0} px={4}>
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
