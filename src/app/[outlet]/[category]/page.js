import { Box } from "@chakra-ui/react";
import React from "react";
import MenuList from "../MenuList";
import { getProducts } from "@/lib/apiCalls/fetcher";

export default async function page({ params }) {
  const { outlet } = await params;
  const ItemsList = await getProducts(outlet);

  return (
    <Box pt={28}>
      <MenuList data={ItemsList.products} />
    </Box>
  );
}
