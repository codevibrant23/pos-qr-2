import { Box } from "@chakra-ui/react";
import React from "react";
import MenuList from "../MenuList";
import { getProducts } from "@/lib/apiCalls/fetcher";
import { toCategoryName } from "@/lib/utils";

export default async function page({ params }) {
  const { outlet, category } = await params;
  const ItemsList = await getProducts(outlet);

  const items = ItemsList.categories.filter(
    (c) => c.category_name.toLowerCase() == toCategoryName(category)
  )[0].items;

  return <MenuList data={items} />;
}
