"use client";

import React, { useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import CategoryCard from "@/components/cards/CategoryCard";

const colors = [
  {
    reg: "#E5969F",
    high: { start: "#E5969F", end: "#672E34" },
    shadow: "0px 8px 4px 0px #681C25",
  },
  {
    reg: "#98BA56",
    high: { start: "#98BA56", end: "#085815" },
    shadow: "0px 8px 4px 0px #02480E",
  },
  {
    reg: "#ECBD4E",
    high: { start: "#ECBD4E", end: "#816600" },
    shadow: "0px 8px 4px 0px #5A4701",
  },
];

export default function CategoryList({ data }) {
  const [active, setActive] = useState(0);

  return (
    <SimpleGrid
      columns={{ base: 2, sm: 3, md: 4 }}
      gap={2}
      p={4}
    >
      {data?.categories?.map((c, i) => {
        const color = colors[i % 3].reg;
        const gradStart = colors[i % 3].high.start;
        const gradEnd = colors[i % 3].high.end;
        return (
          <CategoryCard
            key={i + 1}
            label={c}
            isActive={active === i + 1}
            onClick={() => setActive(i + 1)}
            activeBgStart={gradStart}
            activeBgEnd={gradEnd}
            categoryBg={color}
          />
        );
      })}
    </SimpleGrid>
  );
}
