"use client";

import React from "react";
import { Flex } from "@chakra-ui/react";
import SpecialCard from "@/components/cards/SpecialCard";

export default function SpecialMenu({ data }) {
  function handleAdd(p) {
    // Add your handling logic here
  }
  return (
    <Flex gap={2} p={4} overflowX="auto">
      {data?.map((p, i) => (
        <SpecialCard key={i} product={p} onClick={() => handleAdd(p)} />
      ))}
    </Flex>
  );
}
