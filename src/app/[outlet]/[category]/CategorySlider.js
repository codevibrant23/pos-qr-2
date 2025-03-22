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
import { useRouter } from "next/navigation";
import React from "react";

export default function CategorySlider({ data, active, outlet }) {
  const router = useRouter();
  return (
    <div className="overflow-scroll hide-scrollbar">
      <div className="w-fit p=2">
        {/* <Bleed> */}
        <TabsRoot
          variant="line"
          value={active}
          onValueChange={(e) => {
            router.push(`/${outlet}/${e.value}`);
          }}
        >
          <TabsList>
            {data.map(({ id, name }) => (
              <TabsTrigger
                value={toUrlString(name)}
                key={id}
                width={"-moz-max-content"}
                textWrap="nowrap"
              >
                {name}
              </TabsTrigger>
            ))}
          </TabsList>
        </TabsRoot>
        {/* </Bleed> */}
      </div>
    </div>
  );
}
