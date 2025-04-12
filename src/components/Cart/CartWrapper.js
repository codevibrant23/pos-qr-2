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
  Icon,
  Stack,
} from "@chakra-ui/react";
import { useCart } from "@/context/CartContext";
import CartItemsList from "./CartItemsList";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Trash2 } from "lucide-react";
import CartButtonTrigger from "./CartButtonTrigger";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { InputGroup } from "../ui/input-group";
import { CiDiscount1, CiUser } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import PaymentMode from "../Checkout/PaymentMode";
import { usePayment } from "@/lib/helpers/checkout/usePayment";

export default function CartWrapper() {
  const {
    cartTrigger: { cartState, toggle },
    cart,
    totalCartQuantity,
    totalCartAmount,
    clearCart,
  } = useCart();
  const { outlet } = useParams();
  const { initiatePayment } = usePayment();

  if (totalCartQuantity == 0) return;

  return (
    <div className="static">
      <DrawerRoot
        open={cartState}
        onOpenChange={(e) => toggle(e.open)}
        size="xl"
      >
        <DrawerTrigger asChild zIndex={20}>
          <CartButtonTrigger
            totalCartAmount={totalCartAmount}
            totalCartQuantity={totalCartQuantity}
          />
        </DrawerTrigger>
        <Portal>
          <DrawerBackdrop bgColor="blackAlpha.700" />
          <DrawerPositioner padding="2">
            <DrawerContent borderRadius="xl">
              <DrawerHeader
                display="flex"
                justifyContent="space-between"
                px={4}
                py={5}
              >
                <DrawerTitle>
                  <HStack alignItems="center" gap={2}>
                    <Icon as={BsCart4} /> <span>Cart</span>
                  </HStack>
                </DrawerTitle>

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
                <Separator color="gray.100" w="full" />
                <Box w="full" px={2}>
                  <Field.Root>
                    {/* <Field.Label>
                      Coupon code <Field.RequiredIndicator />
                    </Field.Label> */}
                    <InputGroup
                      startElement={<Icon as={CiDiscount1} />}
                      w="full"
                    >
                      <Input
                        placeholder="Coupon Code"
                        rounded="xl"
                        colorPalette="orange"
                      />
                    </InputGroup>
                  </Field.Root>
                </Box>
                <Separator color="gray.100" w="full" />

                <Stack alignItems="stretch" w="full" px={2}>
                  <Field.Root required>
                    {/* <Field.Label>
                      Name <Field.RequiredIndicator />
                    </Field.Label> */}
                    <InputGroup startElement={<Icon as={CiUser} />} w="full">
                      <Input
                        placeholder="Enter your name"
                        rounded="xl"
                        colorPalette="orange"
                      />
                    </InputGroup>
                  </Field.Root>
                  <Field.Root required>
                    {/* <Field.Label>
                      Contact <Field.RequiredIndicator />
                    </Field.Label> */}
                    <InputGroup startElement={<Icon as={FiPhone} />} w="full">
                      <Input
                        placeholder="Enter your number"
                        rounded="xl"
                        colorPalette="orange"
                      />
                    </InputGroup>
                    <Field.HelperText>
                      Paperless bill will be sent to this number.
                    </Field.HelperText>
                    <Field.ErrorText>This field is required</Field.ErrorText>
                  </Field.Root>
                </Stack>
                <Separator color="gray.100" w="full" />
                <PaymentMode />
                <Separator color="gray.100" w="full" />
                <HStack gap={2} w="full">
                  <DrawerCloseTrigger asChild>
                    <Button
                      variant="outline"
                      colorPalette="orange"
                      borderRadius="xl"
                      size="md"
                    >
                      Close
                    </Button>
                  </DrawerCloseTrigger>
                  <DrawerActionTrigger asChild flex={1}>
                    <Button
                      colorPalette="orange"
                      borderRadius="xl"
                      // asChild
                      size="md"
                      onClick={() => initiatePayment({})}
                    >
                      {/* <Link href={`/${outlet}/checkout`}> */}
                      <HStack alignItems="center" gap={3}>
                        <Icon as={MdOutlineShoppingCartCheckout} /> Checkout
                        <Separator
                          orientation="vertical"
                          color="white"
                          height="4"
                        />
                        Rs. {totalCartAmount}
                      </HStack>
                      {/* </Link> */}
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
