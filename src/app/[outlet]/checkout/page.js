"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Box,
  Flex,
  Input as ChakraInput,
  Button as ChakraButton,
  Text,
  Stack,
  Divider,
  Spinner,
  Radio,
  RadioGroup,
  Input,
  Button,
  Separator,
  RadioGroupRoot,
  HStack,
  RadioGroupItemHiddenInput,
  RadioGroupItemIndicator,
  RadioGroupItemText,
  RadioGroupItem,
} from "@chakra-ui/react";
import { useCart } from "@/context/CartContext";

const OrderCheckoutComponent = () => {
  // const { cart, removeItem, clearCart } = useCart();
  const router = useRouter();
  // For App Router, you may get the outlet from searchParams or a similar hook.
  // Here we assume it's available as a query param for demonstration:
  const outlet = router.query?.outlet || "1";

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState({
    sendOtp: false,
    verifyOtp: false,
    checkout: false,
  });
  const [phoneError, setPhoneError] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("cash");

  const handleRemove = (item) => {
    const { id, variant_id } = item;
    removeItem(id, variant_id);
  };

  const handlePaymentChange = (value) => {
    setSelectedPayment(value);
  };

  const validateIndianPhoneNumber = (number) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(number);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    if (value && !validateIndianPhoneNumber(value)) {
      setPhoneError("Please enter a valid 10-digit Indian phone number");
    } else {
      setPhoneError("");
    }
  };

  const handleSendOtp = async () => {
    if (!validateIndianPhoneNumber(phoneNumber)) {
      setPhoneError("Please enter a valid 10-digit Indian phone number");
      return;
    }

    setLoading((prev) => ({ ...prev, sendOtp: true }));
    try {
      const response = await fetch("https://test.com/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phoneNumber }),
      });

      if (response.ok) {
        setShowOtpField(true);
        setPhoneError("");
      } else {
        setPhoneError("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      setPhoneError("An error occurred. Please try again.");
    } finally {
      setLoading((prev) => ({ ...prev, sendOtp: false }));
    }
  };

  const handleVerifyOtp = async () => {
    setLoading((prev) => ({ ...prev, verifyOtp: true }));
    try {
      const response = await fetch("https://test.com/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });

      if (response.ok) {
        console.log("OTP verified successfully");
      } else {
        console.error("Failed to verify OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    } finally {
      setLoading((prev) => ({ ...prev, verifyOtp: false }));
    }
  };

  // const { subtotal, totalAmount, totalGstAmount } = useMemo(() => {
  //   let subtotal = 0,
  //     totalAmount = 0,
  //     totalGstAmount = 0;

  //   cart.forEach((item) => {
  //     const itemPrice = parseFloat(item.price);
  //     const gstAmount = (itemPrice * parseFloat(item.gst_percent)) / 100;
  //     subtotal += itemPrice * item.quantity;
  //     totalAmount += (itemPrice + gstAmount) * item.quantity;
  //     totalGstAmount += gstAmount * item.quantity;
  //   });

  //   return {
  //     subtotal: parseFloat(subtotal.toFixed(2)),
  //     totalAmount: parseFloat(totalAmount.toFixed(2)),
  //     totalGstAmount: parseFloat(totalGstAmount.toFixed(2)),
  //   };
  // }, [cart]);

  // const handleCheckout = async () => {
  //   setLoading((prev) => ({ ...prev, checkout: true }));

  //   const orderData = {
  //     order_date: new Date().toISOString(),
  //     total_price: totalAmount.toFixed(2),
  //     gst: totalGstAmount.toFixed(2),
  //     mode: selectedPayment,
  //     customer: { name, phone: phoneNumber },
  //     items: cart.map((item) => {
  //       const productId = item.id;
  //       const quantity = item.quantity;
  //       if (item.variant_id) {
  //         const variantId = item.variant_id;
  //         return { product_variant: variantId, quantity };
  //       }
  //       return { product: productId, quantity };
  //     }),
  //   };

  //   try {
  //     const response = await fetch("/api/submit", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(orderData),
  //     });

  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log("Checkout successful:", result);
  //       router.push(`/${outlet}/success/?order=${result?.data?.order_number}`);
  //       clearCart();
  //     } else {
  //       console.error("Failed to submit order");
  //     }
  //   } catch (error) {
  //     console.error("Error during checkout:", error);
  //   } finally {
  //     setLoading((prev) => ({ ...prev, checkout: false }));
  //   }
  // };

  return (
    <Box
      maxW="7xl"
      mx="auto"
      p={4}
      display="flex"
      flexDirection="column"
      gap={5}
    >
      {/* Cart Items & Order Summary */}
      <Flex direction={{ base: "column", md: "row" }} gap={5}>
        {/* Left Column: Cart Items */}
        {/* <Box flex="1" width={{ base: "100%", md: "60%" }}>
          {cart.map((item, i) => {
            const { name, image, quantity, price, variant_name } = item;
            return (
              <Flex
                key={i}
                align="center"
                p={4}
                borderBottom="1px"
                borderColor="gray.200"
              >
                <Box
                  position="relative"
                  width="80px"
                  height="80px"
                  borderRadius="md"
                  overflow="hidden"
                  mr={4}
                >
                  {image && (
                    <Image
                      src={image}
                      alt={name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </Box>
                <Box flex="1">
                  {variant_name ? (
                    <>
                      <Text fontWeight="semibold">{variant_name}</Text>
                      <Text fontSize="sm" mb={2}>
                        {name}
                      </Text>
                    </>
                  ) : (
                    <Text fontWeight="semibold">{name}</Text>
                  )}
                  <Text fontWeight="medium">RS. {price}</Text>
                </Box>
                <Flex direction="column" align="center" gap={3}>
                  <ChakraButton
                    variant="outline"
                    px={3}
                    py={0}
                    bg="red.800"
                    color="white"
                    borderRadius="lg"
                  >
                    {quantity}
                  </ChakraButton>
                  <ChakraButton
                    variant="ghost"
                    color="red.500"
                    h="32px"
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </ChakraButton>
                </Flex>
              </Flex>
            );
          })}
        </Box> */}
        {/* Right Column: Order Summary */}
        <Box
          p={4}
          minW={{ base: "100%", md: "400px" }}
          bg="gray.50" // light gray background
          borderRadius="12px"
          boxShadow="md"
          border="1px solid"
          borderColor="gray.200"
        >
          <Stack spacing={3}>
            <Flex justify="space-between">
              <Text>Subtotal</Text>
              <Text>RS. XXXX/-</Text>
              {/* <Text>RS. {subtotal}/-</Text> */}
            </Flex>
            <Flex justify="space-between">
              <Text>Discount</Text>
              <Text>RS. 0.0</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>GST & taxes</Text>
              {/* <Text>RS. {totalGstAmount}</Text> */}
              <Text>RS. XX</Text>
            </Flex>
            <Separator my={2} borderColor="gray.300" />
            <Flex justify="space-between" fontWeight="semibold">
              <Text>You need to pay</Text>
              {/* <Text>RS. {totalAmount}</Text> */}
              <Text>RS. XXX/-</Text>
            </Flex>
          </Stack>
        </Box>
      </Flex>
      {/* Address / Payment Section */}
      <Box border="1px" borderColor="gray.200" borderRadius="md" p={4}>
        <Stack spacing={4}>
          <Text fontWeight="semibold" fontSize="lg">
            Checkout
          </Text>
          <ChakraInput
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Flex gap={4} justify="center" align="center">
            <ChakraInput
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            {/* 
            <ChakraButton
              onClick={handleSendOtp}
              disabled={loading.sendOtp || !!phoneError}
              variant="link"
            >
              {loading.sendOtp ? <Spinner size="sm" /> : "Send OTP"}
            </ChakraButton> 
            */}
          </Flex>
          {phoneError && (
            <Text color="red.500" fontSize="sm">
              {phoneError}
            </Text>
          )}
          {showOtpField && (
            <Flex gap={4} justify="center" align="center">
              <Input
                placeholder="Enter 4-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={4}
              />
              <Button
                onClick={handleVerifyOtp}
                disabled={loading.verifyOtp}
                bg="red.500"
                color="white"
                _hover={{ bg: "red.600" }}
              >
                {loading.verifyOtp ? <Spinner size="sm" /> : "Verify OTP"}
              </Button>
            </Flex>
          )}
          <Stack spacing={2}>
            <RadioGroupRoot
              // onChange={handlePaymentChange}
              value={selectedPayment}
              defaultValue="cash"
            >
              <HStack>
                <RadioGroupItem>
                  <RadioGroupItemHiddenInput />
                  <RadioGroupItemIndicator />
                  <RadioGroupItemText>UPI</RadioGroupItemText>
                </RadioGroupItem>
                <RadioGroupItem>
                  <RadioGroupItemHiddenInput />
                  <RadioGroupItemIndicator />
                  <RadioGroupItemText>Cash</RadioGroupItemText>
                </RadioGroupItem>
              </HStack>
            </RadioGroupRoot>
          </Stack>
        </Stack>
      </Box>
      {/* Action Buttons */}
      <Flex gap={4}>
        <ChakraButton
          variant="outline"
          flex="1"
          borderColor="#E06161"
          onClick={() => router.back()}
        >
          Go back
        </ChakraButton>
        <ChakraButton
          flex="1"
          bg="red.500"
          color="white"
          // onClick={handleCheckout}
          disabled={loading.checkout}
          _hover={{ bg: "red.600" }}
        >
          {loading.checkout ? <Spinner size="sm" /> : "Checkout"}
        </ChakraButton>
      </Flex>
    </Box>
  );
};

export default OrderCheckoutComponent;
