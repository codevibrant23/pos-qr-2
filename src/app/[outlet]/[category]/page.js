import { Separator } from "@chakra-ui/react";
import React from "react";
import { getProducts } from "@/lib/apiCalls/fetcher";
import { toCategoryName } from "@/lib/utils";
import SimpleProductCard from "@/components/cards/SimpleProductCard";

export default async function page({ params }) {
  const { outlet, category, veg, nonVeg } = await params;
  const ItemsList = await getProducts(outlet, veg, nonVeg);

  const items = ItemsList.categories.filter(
    (c) => c.category_name.toLowerCase() == toCategoryName(category)
  )[0].items;

  return (
    <>
      {items.map((p, i) => {
        return (
          <div key={i}>
            <SimpleProductCard product={p} />
            <Separator color="gray.100" w my={6} />
          </div>
        );
      })}
    </>
  );
}
