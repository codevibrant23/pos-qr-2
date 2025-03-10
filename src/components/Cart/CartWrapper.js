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
import { FaArrowRight } from "react-icons/fa";

export default function CartWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <div className="static">
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DrawerTrigger asChild>
          <Button
            bg="orange.400"
            minH="48px" // Equivalent to Tailwind's min-h-12 (3rem)
            w="full"
            _hover={{ bg: "orange.500" }}
            borderRadius={0}
          >
            <Flex justify="center" align="center" gap={5} w="full" p={4}>
              <Text>10 Items</Text>
              <Text>Rs. 1120</Text>
              <FaArrowRight size={20} />
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
