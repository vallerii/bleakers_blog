import { chakra, Flex, Heading, Text } from "@chakra-ui/react";
import Carousel from "./carousel";

const Span = chakra("span", {});

const SuccessfullProducts = () => {
  return (
    <Flex
      flexDir={"column"}
      mt={"250px"}
      bg={"#0E0E10"}
      mx={{ base: "0", "2xl": "130px" }}
      px={{ base: "20px", "2xl": "0" }}
      borderRadius={"20px"}
    >
      <Heading
        as={"h3"}
        color={"#fff"}
        fontSize={{ base: "40px", xl: "80px" }}
        fontWeight={"700"}
        lineHeight={{ base: "58px", xl: "120px" }}
        ms={{ base: "0", "2xl": "80px" }}
        mt={"120px"}
        textTransform={"uppercase"}
      >
        FOCUS ON <Span color={"#D9FF81"}>successful</Span> products
      </Heading>
      <Text
        color={"#fff"}
        fontSize={"18px"}
        fontWeight={"400"}
        lineHeight={"24px"}
        ms={{ base: "0", "2xl": "80px" }}
        mt={"20px"}
        mb={"105px"}
      >
        We always focus on the usability and growth of our products
      </Text>
      <Carousel />
    </Flex>
  );
};

export default SuccessfullProducts;
