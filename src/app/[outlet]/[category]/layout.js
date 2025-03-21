import React from "react";
import CategorySlider from "./CategorySlider";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import { getCategories } from "@/lib/apiCalls/fetcher";
import BackToMenu from "./BackToMenu";
import { toCategoryName } from "@/lib/utils";
import Header from "@/components/Interactions/Header";

export default async function layout({ children, params }) {
  const { outlet, category } = await params;
  const Categories = await getCategories(outlet);

  //   console.log(Categories);
  return (
    <Box pos="relative">
      <Box
        pos="fixed"
        top="0"
        left="0"
        right="0"
        bg="white"
        zIndex="50"
        boxShadow="md"
      >
        <Flex align="center" gap={4} px={4} pt={4}>
          <BackToMenu icon={<ArrowLeft size={16} />} />
          <Heading as="h2" size="lg" textTransform="capitalize">
            {toCategoryName(category)}
          </Heading>
        </Flex>
        <Header />
        <CategorySlider
          active={category}
          data={Categories?.categories}
          outlet={outlet}
        />
      </Box>
      <Box pt={40} pb={20}>
        {children}
      </Box>
    </Box>
  );
}
