"use client";

import {
  Flex,
  HStack,
  Icon,
  Separator,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  GiChicken,
  GiChickenLeg,
  GiChickenOven,
  GiMeal,
  GiMeat,
  GiRoastChicken,
} from "react-icons/gi";
import { PiPlantLight } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";

export default function VegNonVegSwitch() {
  return (
    <HStack gap={2}>
      {/* <Text textStyle="sm" fontWeight="light" truncate lineClamp="1">
        Veg
      </Text> */}
      <Switch.Root colorPalette="green" variant="raised">
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb>
            <Switch.ThumbIndicator
              fallback={<Icon as={PiPlantLight} color="green" />}
            >
              <Icon as={PiPlantLight} color="white" />
            </Switch.ThumbIndicator>
          </Switch.Thumb>
          <Switch.Indicator></Switch.Indicator>
        </Switch.Control>
        <Switch.Label>Veg</Switch.Label>
      </Switch.Root>
      <Separator orientation="vertical" height="5" />
      <Switch.Root colorPalette="red" variant="raised">
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb>
            <Switch.ThumbIndicator
              fallback={<Icon as={GiChicken} color="red" />}
            >
              <Icon as={GiChickenOven} color="white" />
            </Switch.ThumbIndicator>
          </Switch.Thumb>
        </Switch.Control>
        <Switch.Label>Non-veg</Switch.Label>
      </Switch.Root>
    </HStack>
  );
}
