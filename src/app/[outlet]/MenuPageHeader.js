"use client";

import Header from "@/components/Interactions/Header";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function MenuPageHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Box w="full" mt={3}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", lg: "3xl" }}
            fontWeight="bold"
            letterSpacing="tight"
          >
            Mantra POS
          </Heading>
          <Text fontSize="sm" color="gray.500" mt={1}>
            123 Main Street, Downtown • 30-40 mins delivery
          </Text>
        </Box>
        <Box>
          <Image
            height={10}
            rounded="md"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
      </Flex>
      <Box
        position="sticky"
        top="0"
        zIndex="1000"
        bgColor="white"
        shadow
        boxShadow={isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none"}
        transition="box-shadow 0.3s ease"
        roundedBottom="md"
      >
        <Header />
      </Box>
    </>
  );
}
