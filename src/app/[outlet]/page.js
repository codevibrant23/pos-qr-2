import { getCategories, getProducts } from "@/lib/apiCalls/fetcher";
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import CategoryList from "./CategoryList";
import MenuList from "./MenuList";
import SpecialMenu from "./SpecialMenu";
import Header from "@/components/Interactions/Header";

export default async function Page({ params }) {
  const { outlet } = await params;
  const Categories = await getCategories(outlet);
  const ItemsList = await getProducts(outlet);

  // console.log(ItemsList);

  return (
    <Box pos="relative">
      <Heading
        as="h2"
        w="full"
        mt={3}
        p={4}
        display="flex"
        justifyContent="space-between"
        sx={{ scrollMarginTop: "5rem" }}
        fontSize={{ base: "2xl", lg: "3xl" }}
        fontWeight="normal"
        letterSpacing="tight"
      >
        Welcome to Vibrant POS
      </Heading>
      <Header />
      <Box>
        <Heading
          as="h3"
          sx={{ scrollMarginTop: "5rem" }}
          fontSize="2xl"
          fontWeight="normal"
          letterSpacing="tight"
          p={3}
          mx={2}
        >
          Categories
        </Heading>
        <CategoryList data={Categories} />
      </Box>
      {/* Special Menu */}
      <Box bg="backgroundLight" py={5}>
        <Heading
          as="h3"
          sx={{ scrollMarginTop: "5rem" }}
          fontSize="2xl"
          fontWeight="normal"
          letterSpacing="tight"
          p={3}
          mx={2}
        >
          Special Menu
        </Heading>
        <SpecialMenu data={ItemsList?.products?.slice(0, 3)} />
      </Box>
      {/* All Items */}
      <Box py={5}>
        
        <MenuList data={ItemsList} />
      </Box>
    </Box>
  );
}
