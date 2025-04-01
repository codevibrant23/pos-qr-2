import { Button, Flex, Separator, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function CartButtonTrigger({
  totalCartAmount,
  totalCartQuantity,
  ...props
}) {
  return (
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
      {...props}
    >
      <Flex justify="center" align="center" gap={4} w="full">
        <Text fontSize="md" fontWeight="light" color="white">
          Rs. {totalCartAmount}
        </Text>
        <Separator orientation="vertical" color="white" height="4" />
        <Text fontSize="md" fontWeight="medium" colorPalette="white">
          <span className="fw-semibold">{totalCartQuantity}</span>
          {totalCartQuantity > 1 ? " items " : " item "}
          added
        </Text>
        <BsFillArrowRightCircleFill size={18} color="white" />
      </Flex>
    </Button>
  );
}
