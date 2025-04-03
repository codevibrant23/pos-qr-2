import React from "react";
import {
  Button,
  CloseButton,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
  Portal,
  Stack,
  RadioCardRoot,
  RadioCardLabel,
  RadioCardItem,
  RadioCardItemHiddenInput,
  RadioCardItemControl,
  RadioCardItemContent,
  RadioCardItemText,
  RadioCardItemDescription,
  RadioCardItemIndicator,
  RadioCardItemAddon,
} from "@chakra-ui/react";

export default function VariantDialog({ open, setOpen, product, addVariant }) {
  const handleVariantSelect = (e) => {
    addVariant(e.value);
  };
  return (
    <DialogRoot
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      size="xs"
      placement="center"
      scrollBehavior="inside"
    >
      <Portal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent borderRadius="xl">
            <DialogHeader
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <DialogTitle>{product?.name}</DialogTitle>
              <DialogCloseTrigger asChild>
                <CloseButton size="sm" />
              </DialogCloseTrigger>
            </DialogHeader>
            <DialogBody py={4}>
              <RadioCardRoot
                defaultValue="none"
                colorPalette="orange"
                onValueChange={handleVariantSelect}
              >
                <RadioCardLabel>Please select to add product.</RadioCardLabel>

                <Stack align="stretch">
                  {product.variants.map((item) => (
                    <RadioCardItem
                      key={item.id}
                      value={item.id}
                      borderRadius="lg"
                    >
                      <RadioCardItemHiddenInput />
                      <RadioCardItemControl>
                        <RadioCardItemContent>
                          <RadioCardItemText>{item.name}</RadioCardItemText>
                          <RadioCardItemDescription>
                            {item.price}
                          </RadioCardItemDescription>
                        </RadioCardItemContent>
                        <RadioCardItemIndicator />
                      </RadioCardItemControl>
                      <RadioCardItemAddon>Description</RadioCardItemAddon>
                    </RadioCardItem>
                  ))}
                  <RadioCardItem key="none" value="none" borderRadius="lg">
                    <RadioCardItemHiddenInput />
                    <RadioCardItemControl>
                      <RadioCardItemText>None</RadioCardItemText>
                      <RadioCardItemIndicator />
                    </RadioCardItemControl>
                  </RadioCardItem>
                </Stack>
              </RadioCardRoot>
            </DialogBody>
            <DialogFooter>
              <DialogCloseTrigger asChild>
                <Button
                  borderRadius="xl"
                  colorPalette="orange"
                  variant="surface"
                >
                  Cancel
                </Button>
              </DialogCloseTrigger>
            </DialogFooter>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  );
}
