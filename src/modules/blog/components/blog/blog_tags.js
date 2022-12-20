import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const tags = [
  { id: 1, name: "All" },
  { id: 2, name: "Startup" },
  { id: 3, name: "Startup" },
  { id: 4, name: "Startup" },
  { id: 5, name: "Startup" },
  { id: 6, name: "Startup" },
];

const BlogTags = () => {
  const [selectedTags, setSelectedTags] = useState();

  return (
    <Flex alignItems={"center"} gap={"10px"} mb={"40px"}>
      {tags.map((item, index) => (
        <Text
          key={index}
          fontSize={"16px"}
          lineHeight={"22px"}
          fontWeight={"400"}
          border={"1px solid #0E0E10"}
          borderRadius={"35px"}
          _hover={{ bg: selectedTags?.id !== item.id && "#D5DFFF" }}
          bg={selectedTags?.id === item.id && "#0E0E10"}
          color={selectedTags?.id === item.id && "#fff"}
          p={"9px 40px"}
          cursor={"pointer"}
          onClick={() => setSelectedTags(item)}
        >
          {item.name}
        </Text>
      ))}
    </Flex>
  );
};

export default BlogTags;
