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
import React from "react";

export default function CategorySlider({ data, active }) {
  // console.log(typeof active);
  return (
    <div className="overflow-scroll">
      <div className="w-fit p=2">
        {/* <Bleed> */}
        <TabsRoot variant="line">
          <TabsList>
            {data.map((c) => (
              <TabsTrigger
                value={toUrlString(c)}
                key={c}
                width={"-moz-max-content"}
                textWrap="nowrap"
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
