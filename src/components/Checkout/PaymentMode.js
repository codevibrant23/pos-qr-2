import { HStack, Icon, Image, RadioCard } from "@chakra-ui/react";
import { PiMoneyWavy } from "react-icons/pi";

export default function PaymentMode({ field }) {
  return (
    <RadioCard.Root
      orientation="horizontal"
      align="center"
      justify="center"
      w="full"
      size="sm"
      colorPalette="orange"
      name={field.name}
      value={field.value}
      onValueChange={({ value }) => {
        field.onChange(value);
      }}
    >
      <HStack align="stretch">
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value} borderRadius="xl">
            <RadioCard.ItemHiddenInput onBlur={field.onBlur} />
            <RadioCard.ItemControl>
              <Icon fontSize="2xl" color="fg.subtle">
                {item.icon}
              </Icon>
              <RadioCard.ItemText ms="-4">{item.title}</RadioCard.ItemText>
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      </HStack>
    </RadioCard.Root>
  );
}

const items = [
  {
    value: "upi",
    title: "UPI",
    icon: (
      <Image
        src="/assets/UPI-01.png"
        alt="UPI logo"
        height="20px"
        fit="contain"
      />
    ),
  },
  { value: "cash", title: "Cash", icon: <PiMoneyWavy color="green" /> },
];
