import React from "react";
import { Box, Text, Button, Stack, HStack, Flex } from "@chakra-ui/react";
import VegIcon from "@/lib/Icons/VegIcon";
import NonVegIcon from "@/lib/Icons/NonVegIcon";
import AddToCartButton from "../Cart/AddToCartButton";

export default function CartItem({ product }) {
  return (
    <Box
      bg="white"
      display="flex"
      alignItems="center"
      py={3}
      w="full"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Stack me={3} gap={1} flex="1">
        <Text fontSize="md" fontWeight="medium" color="gray.800">
          {product.name}
        </Text>
        <Flex alignItems="center" gap={3}>
          <Box
            flexShrink={0}
            boxSize={6}
            display="flex"
            alignItems="start"
            justifyContent="center"
          >
            {true ? <VegIcon /> : <NonVegIcon />}
          </Box>
          <Text fontSize="sm" color="gray.600">
            Rs. {product.variant_price || product.price}
          </Text>
        </Flex>
      </Stack>

      {/* <Box
        position="relative"
        boxSize={24}
        borderRadius="2xl"
        border="1px solid"
        borderColor="gray.200"
      >
        {product.image && (
          <NextImage
            src={product.image}
            layout="fill"
            objectFit="cover"
            alt={product.name}
          />
        )}
        </Box> */}
      <AddToCartButton data={product} size="xs" />
    </Box>
  );
}
