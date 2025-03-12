import { Box } from "@chakra-ui/react";
import React from "react";
import SearchDialog from "./SearchDialog";
import VegNonVegSwitch from "./VegNonVegSwitch";

export default function Header() {
  return (
    <Box display="flex" justifyContent="space-between" p={4}>
      <VegNonVegSwitch />
      <SearchDialog />
    </Box>
  );
}
