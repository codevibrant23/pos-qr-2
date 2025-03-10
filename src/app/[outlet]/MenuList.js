"use client";

import SimpleProductCard from "@/components/cards/SimpleProductCard";
import { Stack } from "@chakra-ui/react";
import React from "react";

export default function MenuList({ data }) {
  function handleAdd() {}
  return (
    <Stack p={2}>
      {data?.map((p, i) => (
        <SimpleProductCard key={i} product={p} onClick={() => handleAdd(p)} />
      ))}
    </Stack>
  );
}
