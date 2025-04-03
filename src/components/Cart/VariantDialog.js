import React from "react";
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
  RadioGroup,
  Radio,
  RadioCard,
  HStack,
  Icon,
  Image,
  Stack,
} from "@chakra-ui/react";

export default function VariantDialog({
  open,
  setOpen,
  product,
  value,
  setValue,
}) {
  console.log(product);
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
              <RadioCard.Root defaultValue="none" colorPalette="orange" value={value} onValueChange={(e) => setValue(e.value)}>
                <Stack align="stretch">
                  {product.variants.map((item) => (
                    <RadioCard.Item key={item.id} value={item.id} borderRadius="lg">
                      <RadioCard.ItemHiddenInput />
                      <RadioCard.ItemControl>
                        <RadioCard.ItemContent>
                          <RadioCard.ItemText>{item.name}</RadioCard.ItemText>
                          <RadioCard.ItemDescription>
                            {item.price}
                          </RadioCard.ItemDescription>
                        </RadioCard.ItemContent>
                        <RadioCard.ItemIndicator />
                      </RadioCard.ItemControl>
                      <RadioCard.ItemAddon>Description</RadioCard.ItemAddon>
                    </RadioCard.Item>
                  ))}
                  <RadioCard.Item key="none" value="none" borderRadius="lg">
                    <RadioCard.ItemHiddenInput />
                    <RadioCard.ItemControl>
                      <RadioCard.ItemText>None</RadioCard.ItemText>
                      <RadioCard.ItemIndicator />
                    </RadioCard.ItemControl>
                  </RadioCard.Item>
                </Stack>
              </RadioCard.Root>
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
