import { Text } from "@chakra-ui/react";
import React from "react";
const BoldContent = ({ text, mb, mt }) => {
  return (
    <Text
      fontSize={"18px"}
      fontWeight={"500"}
      lineHeight={"24px"}
      mb={mb && mb}
      mt={mt ? mt : "20px"}
    >
      {text}
    </Text>
  );
};
export default BoldContent;
