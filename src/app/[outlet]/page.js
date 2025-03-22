import {
  getAdBanners,
  getCategories,
  getProducts,
  getSpecialMenu,
} from "@/lib/apiCalls/fetcher";
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import CategoryList from "./CategoryList";
import MenuList from "./MenuList";
import SpecialMenu from "./SpecialMenu";
import Carousel from "@/components/Interactions/Carousel";
import MenuPageHeader from "./MenuPageHeader";

export default async function Page({ params, searchParams }) {
  const { outlet } = await params;
  const { veg, nonVeg } = await searchParams;

  const itemsList = await getProducts(outlet, veg, nonVeg);
  const specialMenu = await getSpecialMenu(outlet);
  const banners = await getAdBanners(outlet);

  // console.log(await searchParams);

  return (
    <Box pos="relative">
      <MenuPageHeader />
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
        <CategoryList outlet={outlet} />
      </Box>
      <Box my={5}>
        <Carousel banners={banners.banners} autoPlay={true} />
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
        <SpecialMenu data={specialMenu?.products} />
      </Box>
      {/* All Items */}
      <Box py={5}>
        <MenuList data={itemsList} />
      </Box>
    </Box>
  );
}
