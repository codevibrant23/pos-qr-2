import {
  Box,
  Button,
  CloseButton,
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Portal,
} from "@chakra-ui/react";
import { Search } from "lucide-react";
import React from "react";
import SearchComponent from "./SearchComponent";

export default function SearchDialog() {
  return (
    <DialogRoot size="full" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Button
          variant="subtle"
          colorPalette="orange"
          size="sm"
          borderRadius="full"
        >
          <Search /> Search
        </Button>
      </DialogTrigger>
      <Portal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent>
            <DialogHeader
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <DialogTitle>Search Menu</DialogTitle>
              <DialogCloseTrigger asChild>
                <CloseButton size="sm" />
              </DialogCloseTrigger>
            </DialogHeader>
            <DialogBody py={0}>
              <SearchComponent />
            </DialogBody>
            <DialogFooter>
              {/* <DialogActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DialogActionTrigger> */}
              <DialogCloseTrigger asChild>
                <Button
                  borderRadius="lg"
                  colorPalette="orange"
                  variant="subtle"
                >
                  Close
                </Button>
              </DialogCloseTrigger>
            </DialogFooter>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  );
}
