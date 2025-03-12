import {
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
            <DialogHeader display="flex" justifyContent="space-between">
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogCloseTrigger asChild>
                <CloseButton size="sm" />
              </DialogCloseTrigger>
            </DialogHeader>
            <DialogBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </DialogBody>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DialogActionTrigger>
              <Button>Save</Button>
            </DialogFooter>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  );
}
