import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import CategoryCard from "@/components/cards/CategoryCard";
import { getCategories } from "@/lib/apiCalls/fetcher";
import { toUrlString } from "@/lib/utils";

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

export default async function CategoryList({ outlet }) {
  const data = await getCategories(outlet);

  return (
    <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} gap={2} p={4}>
      {data?.categories?.map(({ id, name }, i) => {
        const color = colors[i % 3].reg;
        const gradStart = colors[i % 3].high.start;
        const gradEnd = colors[i % 3].high.end;
        return (
          <CategoryCard
            key={i}
            id={id}
            label={name}
            activeBgStart={gradStart}
            activeBgEnd={gradEnd}
            categoryBg={color}
            linkUrl={`/${outlet}/${toUrlString(name)}`}
          />
        );
      })}
    </SimpleGrid>
  );
}
