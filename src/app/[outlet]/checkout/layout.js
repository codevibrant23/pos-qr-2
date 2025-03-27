import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import BackButton from "../[category]/BackToMenu";
import { ArrowLeft } from "lucide-react";

export default function layout({ children }) {
  return (
    <div>
      <Flex align="center" gap={4} px={4} pt={4}>
        <BackButton icon={<ArrowLeft size={16} />} />
        <Heading as="h2" size="lg" textTransform="capitalize">
          Order Checkout
        </Heading>
      </Flex>
      {children}
    </div>
  );
}
