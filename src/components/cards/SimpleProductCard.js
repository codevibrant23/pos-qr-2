"use client";

import React from "react";
import NextImage from "next/image";
import { Box, Text, Button, Stack, Separator } from "@chakra-ui/react";
import VegIcon from "@/lib/Icons/VegIcon";
import NonVegIcon from "@/lib/Icons/NonVegIcon";
import AddToCartButton from "../Cart/AddToCartButton";

export default function SimpleProductCard({ product, onClick }) {
  return (
    <>
      <Box
        onClick={onClick}
        bg="white"
        display="flex"
        alignItems="center"
        cursor="pointer"
        p={2}
        w="full"
      >
        <Stack mx={3} flex={1} gap={1}>
          <Box
            flexShrink={0}
            boxSize={6}
            display="flex"
            alignItems="start"
            justifyContent="center"
          >
            {product.isVeg ? <VegIcon /> : <NonVegIcon />}
          </Box>
          <Text fontSize="md" fontWeight="medium" color="gray.800">
            {product.name}
          </Text>
          <Text fontSize="sm" color="gray.600">
            Rs. {product.price}
          </Text>
        </Stack>

        <Box
          position="relative"
          boxSize={24}
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.200"
          // overflow="visi"
        >
          {product.image && (
            <NextImage
              src={product.image}
              layout="fill"
              objectFit="cover"
              alt={product.name}
            />
          )}
          <Box
            position="absolute"
            bottom={-3}
            left="50%"
            transform="translateX(-50%)"
            zIndex={10}
          >
            <AddToCartButton key={false} size={"2xs"} />
          </Box>
        </Box>
      </Box>
      <Separator color="gray.100" />
    </>
  );
}
