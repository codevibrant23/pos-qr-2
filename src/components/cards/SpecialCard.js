"use client";

import React from "react";
import NextImage from "next/image";
import { Heart } from "lucide-react";
import {
  Card,
  CardBody,
  CardFooter,
  Box,
  Flex,
  Text,
  Button,
  CardRoot,
} from "@chakra-ui/react";
import VegIcon from "@/lib/Icons/VegIcon";
import NonVegIcon from "@/lib/Icons/NonVegIcon";
import AddToCartButton from "../Cart/AddToCartButton";

export default function SpecialCard({ product }) {
  return (
    <CardRoot
      minW="256px" // Tailwind's min-w-64 (16rem)
      borderRadius="2xl"
      borderWidth="1px"
      borderColor="gray.200"
      boxShadow="md"
      shadowColor="gray.100"
      bg="white"
      overflow="hidden"
    >
      <CardBody p={4}>
        {/* Image & Background Heart */}
        <Box
          position="relative"
          w="full"
          h="144px" // Tailwind's h-36 (9rem)
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="green.100"
          borderRadius="xl"
        >
          {/* Background circles */}
          <Box
            position="absolute"
            w="3rem" // Tailwind's w-12 (3rem)
            h="3rem"
            bg="green.600"
            borderRadius="full"
            top="0.5rem" // Tailwind's top-2
            left="1.5rem" // Tailwind's left-6
          />
          <Box
            position="absolute"
            w="4rem" // Tailwind's w-16 (4rem)
            h="4rem"
            bg="green.500"
            borderRadius="full"
            top="1rem" // Tailwind's top-4
            left="2.5rem" // Tailwind's left-10
          />
          {product.image && (
            <NextImage
              src={product.image}
              width={80}
              height={80}
              alt={product.name}
              style={{ position: "relative", zIndex: 10 }}
            />
          )}
          <Box
            position="absolute"
            bottom="0.5rem" // Tailwind's bottom-2
            right="0.5rem" // Tailwind's right-2
            color="green.600"
          >
            ◆
          </Box>
        </Box>

        {/* Product Info */}
        <Box mt={4}>
          <Box
            w="2rem" // Tailwind's w-8 (2rem)
            h="2rem" // Tailwind's h-8 (2rem)
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {product.isVeg ? <VegIcon /> : <NonVegIcon />}
          </Box>
          <Text fontWeight="medium" fontSize="lg">
            {product.name}
          </Text>
          <Text color="gray.700" fontWeight="semibold">
            ₹{product.price}
          </Text>
        </Box>
      </CardBody>

      <CardFooter flexDirection="column" alignItems="center" gap={2} p={4}>
        <AddToCartButton key={true} size={"md"} data={product} />

        {/* Love Count */}
        <Flex
          alignItems="center"
          justifyContent="center"
          color="gray.500"
          fontSize="sm"
        >
          <Box as={Heart} w={4} h={4} color="red.500" mr={1} />
          <Text>loved by {product.loves || "33k"}</Text>
        </Flex>
      </CardFooter>
    </CardRoot>
  );
}
