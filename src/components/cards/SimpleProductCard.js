"use client";

import React from "react";
import NextImage from "next/image";
import { Box, Text, Stack } from "@chakra-ui/react";
import VegIcon from "@/lib/Icons/VegIcon";
import NonVegIcon from "@/lib/Icons/NonVegIcon";
import AddToCartButton from "../Cart/AddToCartButton";

export default function SimpleProductCard({ product }) {
  return (
    <Box
      bg="white"
      display="flex"
      alignItems="center"
      cursor="pointer"
      p={2}
      w="full"
    >
      {/* Left Section - Text Details */}
      <Stack mr={1} gap={1} flex="1">
        <Box
          flexShrink={0}
          boxSize={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {true ? <VegIcon /> : <NonVegIcon />}
        </Box>
        <Text fontSize="md" fontWeight="medium" color="gray.800">
          {product.name}
        </Text>
        <Text fontSize="sm" color="gray.600">
          Rs. {product.price}
        </Text>
        <Text
          mt={2}
          fontSize="sm"
          color="gray.600"
          fontWeight="medium"
          lineClamp={2}
        >
          {product.description}
        </Text>
      </Stack>

      {/* Right Section - Image with Add to Cart Button */}
      <Box
        position="relative"
        boxSize={24}
        borderRadius="2xl"
        border="1px solid"
        borderColor="gray.200"
        flexShrink={0}
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
          zIndex={2}
        >
          <AddToCartButton key={false} size="xs" data={product} />
        </Box>
      </Box>
    </Box>
  );
}
