"use client";

import CategorySlider from "./CategorySlider";
import { Box, Button, Flex, Heading, Spinner } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import { toCategoryName } from "@/lib/utils";
import Header from "@/components/Interactions/Header";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useRouterReplace } from "@/lib/CustomHooks/RouterHook";
import BackButton from "./BackToMenu";

export default function CategoryMenuHeader({ categoryList }) {
  const { outlet, category } = useParams();

  const [loading, setLoading] = useState(false);
  const routerReplace = useRouterReplace();

  const handleTabchange = (e) => {
    setLoading(true);
    routerReplace(`/${outlet}/${e.value}`).then(() => {
      setLoading(false);
    });
  };
  return (
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
        <BackButton icon={<ArrowLeft size={16} />} />
        <Heading as="h2" size="lg" textTransform="capitalize">
          {toCategoryName(category)}
        </Heading>
        {loading && (
          <Spinner
            ml={2}
            size="sm"
            color="orange.500"
            css={{ "--spinner-track-color": "colors.orange.50" }}
          />
        )}
      </Flex>
      <Header />
      <CategorySlider
        active={category}
        data={categoryList}
        onChange={handleTabchange}
      />
    </Box>
  );
}
