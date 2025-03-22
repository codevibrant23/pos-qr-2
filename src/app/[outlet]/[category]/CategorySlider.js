import { toUrlString } from "@/lib/utils";
import { TabsList, TabsRoot, TabsTrigger } from "@chakra-ui/react";
import React from "react";

export default function CategorySlider({ data, active, onChange }) {
  return (
    <div className="overflow-scroll hide-scrollbar">
      <div className="w-fit p=2">
        {/* <Bleed> */}
        <TabsRoot variant="line" value={active} onValueChange={onChange}>
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
