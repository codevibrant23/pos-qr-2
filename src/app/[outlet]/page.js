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
import Header from "@/components/Interactions/Header";
import Carousel from "@/components/Interactions/Carousel";

export default async function Page({ params }) {
  const { outlet, veg, nonVeg } = await params;
  const categories = await getCategories(outlet);
  const itemsList = await getProducts(outlet, veg, nonVeg);
  const specialMenu = await getSpecialMenu(outlet);
  const banners = await getAdBanners(outlet);

  console.log(banners);

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
        <CategoryList data={categories} />
      </Box>
      <Box my={5}>
        <Carousel banners={banners.banners} autoPlay={true}/>
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
