import { Text } from "@chakra-ui/react";
import React from "react";

const HelpMenu = ({ item, setIsSelect, isSelect }) => {
  return (
    <Text
      key={item}
      color={isSelect === item ? "#0E0E10" : "#575757"}
      fontSize={"32px"}
      fontWeight={"700"}
      lineHeight={"40px"}
      py={"20px"}
      ps={"100px"}
      bg={isSelect === item && "#D5DFFF"}
      borderRight={isSelect === item && "1px solid #482DF8"}
      _hover={{ bg: "#F3F1FE" }}
      cursor={"pointer"}
      onClick={() => setIsSelect(item)}
    >
      {item}
    </Text>
  );
};

export default HelpMenu;
