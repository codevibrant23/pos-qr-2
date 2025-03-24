"use client";

import React, { useState } from "react";
import {
  Button,
  CloseButton,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerPositioner,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  Flex,
  Portal,
  Text,
} from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CartWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <div className="static">
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} size="xl">
        <DrawerTrigger asChild>
          <Button
            bg="orange.400"
            minH="52px"
            w="full"
            borderRadius="md"
            boxShadow="md"
            transition="all 0.2s ease-in-out"
            _hover={{
              bg: "orange.500",
              transform: "scale(1.02)",
            }}
          >
            <Flex justify="center" align="center" gap={4} w="full" p={4}>
              <Text fontSize="md" fontWeight="medium" color="white">
                10 Items
              </Text>
              <Text fontSize="md" fontWeight="medium" color="white">
                Rs. 1120
              </Text>
              <FaArrowRightLong size={18} color="white" />
            </Flex>
          </Button>
        </DrawerTrigger>
        <Portal>
          {/* <DrawerBackdrop /> */}
          <DrawerPositioner padding="2">
            <DrawerContent>
              <DrawerHeader display="flex" justifyContent="space-between">
                <DrawerTitle>Drawer Title</DrawerTitle>
                <DrawerCloseTrigger asChild>
                  <CloseButton size="sm" />
                </DrawerCloseTrigger>
              </DrawerHeader>
              <DrawerBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </DrawerBody>
              <DrawerFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerPositioner>
        </Portal>
      </DrawerRoot>
    </div>
  );
}
