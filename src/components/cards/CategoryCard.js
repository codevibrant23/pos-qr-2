"use client";

import React from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import { cn, toUrlString } from "@/lib/utils";
import styles from "@/styles/menu.module.css";

const CategoryCard = ({
  label,
  icon,
  isActive,
  onClick,
  activeBgStart,
  activeBgEnd,
  categoryBg,
}) => {
  const { outlet } = useParams();
  const router = useRouter();

  const handleClick = () => {
    if (onClick) onClick();
    router.push(`/${outlet}/${toUrlString(label)}`);
  };

  return (
    <Button
      onClick={handleClick}
      variant="unstyled"
      className={cn([styles.category])}
      style={{
        "--active-bg-start": activeBgStart,
        "--active-bg-end": activeBgEnd,
        "--category-bg": categoryBg,
      }}
      data-active={isActive}
      borderRadius="lg"
      h="56px" // equivalent to Tailwind's h-14 (3.5rem)
      p={2} // equivalent to Tailwind's p-2 (0.5rem)
      position="relative"
      width="100%"
    >
      {/* Icon positioned at the top right */}
      <Box position="absolute" right="10px" bottom="14px">
        {icon}
      </Box>
      {/* Label positioned at the bottom left */}
      <Box position="absolute" left="10px" bottom="10px">
        <Text fontWeight="medium">{label}</Text>
      </Box>
    </Button>
  );
};

export default CategoryCard;
