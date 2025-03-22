import React from "react";
import CategorySlider from "./CategorySlider";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import { getCategories } from "@/lib/apiCalls/fetcher";
import BackToMenu from "./BackToMenu";
import { toCategoryName } from "@/lib/utils";
import Header from "@/components/Interactions/Header";
import CategoryMenuHeader from "./CategoryMenuHeader";

export default async function layout({ children, params }) {
  const { outlet } = await params;
  const Categories = await getCategories(outlet);

  //   console.log(Categories);
  return (
    <Box pos="relative">
      <CategoryMenuHeader
        categoryList={Categories?.categories}
      />
      <Box pt={44} pb={20}>
        {children}
      </Box>
    </Box>
  );
}
