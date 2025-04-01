import React from "react";
import { Box } from "@chakra-ui/react";
import { getCategories } from "@/lib/apiCalls/fetcher";
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
      <Box pt={44} pb={20} px={2}>
        {children}
      </Box>
    </Box>
  );
}
