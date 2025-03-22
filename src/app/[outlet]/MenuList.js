"use client";

import SimpleProductCard from "@/components/cards/SimpleProductCard";
import { Heading, Separator, Stack } from "@chakra-ui/react";
import React from "react";

export default function MenuList({ data }) {
  function handleAdd() {}
  // console.log(data);
  return (
    <Stack p={2}>
      {data?.categories.map(({ category_name, items }, i) => {
        if (!items || items.length == 0) return;
        return (
          <div key={i + 1}>
            <Heading
              as="h3"
              sx={{ scrollMarginTop: "5rem" }}
              fontSize="2xl"
              // fontWeight="medium"
              letterSpacing="tight"
              p={3}
              mx={2}
            >
              {category_name}
            </Heading>
            <div>
              {items?.map((p, j) => {
                return (
                  <div key={j}>
                    <SimpleProductCard
                      product={p}
                      onClick={() => handleAdd(p)}
                    />
                    <Separator color="gray.100"w my={6} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Stack>
  );
}
