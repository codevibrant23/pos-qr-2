import React from "react";
import CategorySlider from "./CategorySlider";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import { getCategories } from "@/lib/apiCalls/fetcher";
import BackToMenu from "./BackToMenu";
import { toCategoryName } from "@/lib/utils";

export default async function layout({ children, params }) {
  const { outlet, category } = await params;
  const Categories = await getCategories(outlet);

  //   console.log(Categories);
  return (
    <Box pos="relative">
      {/* Fixed Header */}
      <Box
        pos="fixed"
        top="0"
        left="0"
        right="0"
        bg="white"
        zIndex="50"
        boxShadow="md"
        p={4}
      >
        <Flex align="center" gap={4} mb={4}>
          <BackToMenu icon={<ArrowLeft size={16} />} />
          <Heading as="h2" size="lg" textTransform="capitalize">
            {toCategoryName(category)}
          </Heading>
        </Flex>
        {/* Scrollable Tabs for Categories */}
        <CategorySlider active={category} data={Categories?.categories} />
      </Box>
      {children}
    </Box>
  );
}
