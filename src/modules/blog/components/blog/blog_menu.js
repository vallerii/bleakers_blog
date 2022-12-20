import { Flex, Text } from "@chakra-ui/react";
import FireIconDark from "assets/blog/svg/fire-dark.svg";
import ClockIconDark from "assets/blog/svg/time-dark.svg";
import FireIconLight from "assets/blog/svg/fire-light.svg";
import ClockIconLight from "assets/blog/svg/time-light.svg";
import { useState } from "react";

const BlogMenu = () => {
  const [selectedFeeds, setSelectedFeeds] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  const feedsData = [
    {
      id: 1,
      name: "Popular",
      icon: selectedFeeds !== "Popular" ? <FireIconDark /> : <FireIconLight />,
    },
    {
      id: 2,
      name: "New",
      icon: selectedFeeds !== "New" ? <ClockIconDark /> : <ClockIconLight />,
    },
  ];
  const categoriesData = [
    "Startup",
    "Business",
    "Teamwork",
    "Workflow",
    "Other",
  ];
  return (
    <Flex flexDir={"column"}>
      <Text
        color={"#575757"}
        fontSize={"16px"}
        fontWeight={"500"}
        lineHeight={"22px"}
        mb={"20px"}
      >
        Feeds
      </Text>
      <Flex flexDir={"column"} w={"100%"} mb={"80px"}>
        {feedsData.map((item) => (
          <Flex
            key={item.id}
            alignItems={"center"}
            p={"14px 20px"}
            borderRadius={"10px"}
            gap={"10px"}
            _hover={{ bg: selectedFeeds !== item.name && "#D5DFFF" }}
            _active={{ bg: "#0E0E10", color: "#fff" }}
            bg={selectedFeeds === item.name && "#0E0E10"}
            onClick={() => setSelectedFeeds(item.name)}
            cursor={"pointer"}
          >
            {item.icon}
            <Text
              color={selectedFeeds === item.name && "#fff"}
              fontSize={"24px"}
              fontWeight={"500"}
              lineHeight={"32px"}
            >
              {item.name}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Text
        color={"#575757"}
        fontSize={"16px"}
        fontWeight={"500"}
        lineHeight={"22px"}
        mb={"20px"}
      >
        Categories
      </Text>
      <Flex flexDir={"column"} w={"100%"}>
        {categoriesData.map((item) => (
          <Flex
            key={item}
            alignItems={"center"}
            p={"14px 20px"}
            borderRadius={"10px"}
            gap={"10px"}
            _hover={{
              bg: selectedCategory !== item && "#D5DFFF",
              color: "#0E0E10",
            }}
            _active={{ bg: "#0E0E10", color: "#fff" }}
            bg={selectedCategory === item && "#0E0E10"}
            onClick={() => setSelectedCategory(item)}
            cursor={"pointer"}
          >
            <Text
              color={selectedCategory === item && "#fff"}
              fontSize={"24px"}
              fontWeight={"500"}
              lineHeight={"32px"}
              ps={"40px"}
            >
              {item}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default BlogMenu;
