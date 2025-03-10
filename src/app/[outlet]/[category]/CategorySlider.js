"use client";

import { toUrlString } from "@/lib/utils";
import {
  Bleed,
  For,
  Tabs,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "@chakra-ui/react";
import { Box } from "lucide-react";
import React from "react";

export default function CategorySlider({ data, active }) {
  console.log(typeof active);
  return (
    <div className="overflow-scroll p-2">
      <div className="w-fit">
        {/* <Bleed> */}
        <TabsRoot variant="line">
          <TabsList>
            {data.map((c) => (
              <TabsTrigger
                value={toUrlString(c)}
                key={c}
                width={"-moz-max-content"}
              >
                {c}
              </TabsTrigger>
            ))}
          </TabsList>
        </TabsRoot>
        {/* </Bleed> */}
      </div>
    </div>
  );
}
