"use client";

import React, { useState, useEffect } from "react";
import {
  HStack,
  Icon,
  Separator,
  Spinner,
  Switch,
  Text,
} from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { GiChicken, GiChickenOven } from "react-icons/gi";
import { PiPlantLight } from "react-icons/pi";
import { useRouterReplace } from "@/lib/CustomHooks/RouterHook";

export default function VegNonVegSwitch() {
  const searchParams = useSearchParams();
  const routerReplace = useRouterReplace();
  const [loading, setLoading] = useState(false);

  // Initialize states from query parameters (e.g., ?veg=true&nonVeg=true)
  const initialVeg = searchParams.get("veg") === "true";
  const initialNonVeg = searchParams.get("nonVeg") === "true";

  const handleToggle = async (param, e) => {
    setLoading(true);
    const params = new URLSearchParams(searchParams.toString());

    if (e?.checked) {
      params.set(param, "true");
    } else {
      params.delete(param);
    }
    routerReplace(`?${params.toString()}`).then(() => setLoading(false));
  };

  return (
    <HStack gap={2}>
      <Switch.Root
        defaultChecked={initialVeg}
        // value={vegSelected}
        onCheckedChange={(checked) => handleToggle("veg", checked)}
        colorPalette="green"
        variant="raised"
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb>
            <Switch.ThumbIndicator
              fallback={<Icon as={PiPlantLight} color="green" />}
            >
              <Icon as={PiPlantLight} color="white" />
            </Switch.ThumbIndicator>
          </Switch.Thumb>
          <Switch.Indicator />
        </Switch.Control>
        <Switch.Label>Veg</Switch.Label>
      </Switch.Root>
      <Separator orientation="vertical" height="5" />
      <Switch.Root
        defaultChecked={initialNonVeg}
        // value={nonVegSelected}
        onCheckedChange={(checked) => handleToggle("nonVeg", checked)}
        colorPalette="red"
        variant="raised"
      >
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
      {loading && (
        <Spinner
          ml={2}
          size="sm"
          color="orange.500"
          css={{ "--spinner-track-color": "colors.orange.50" }}
        />
      )}
    </HStack>
  );
}
