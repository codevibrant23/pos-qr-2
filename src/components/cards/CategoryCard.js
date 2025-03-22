import React from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { cn } from "@/lib/utils";
import styles from "@/styles/menu.module.css";
import Link from "next/link";

const CategoryCard = ({
  label,
  icon,
  activeBgStart,
  activeBgEnd,
  categoryBg,
  linkUrl,
}) => {
  return (
    <Button
      variant="unstyled"
      className={cn([styles.category])}
      borderRadius="lg"
      h="56px" // equivalent to Tailwind's h-14 (3.5rem)
      p={2} // equivalent to Tailwind's p-2 (0.5rem)
      position="relative"
      width="100%"
      bg={categoryBg}
      _hover={{
        bgGradient: `linear(to-r, ${activeBgStart}, ${activeBgEnd})`,
        color: "white",
      }}
      _active={{
        bgGradient: `linear(to-r, ${activeBgStart}, ${activeBgEnd})`,
        color: "white",
      }}
      asChild
    >
      <Link href={linkUrl}>
        <div>
          {/* Icon positioned at the top right */}
          <Box position="absolute" right="10px" bottom="14px">
            {icon}
          </Box>
          {/* Label positioned at the bottom left */}
          <Box position="absolute" left="10px" bottom="10px">
            <Text fontWeight="medium">{label}</Text>
          </Box>
        </div>
      </Link>
    </Button>
  );
};

export default CategoryCard;
