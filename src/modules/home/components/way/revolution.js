import {
  chakra,
  Flex,
  Grid,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { revoluteionData } from "modules/home/data/revolution_db";
const Span = chakra("span", {});

const Revolution = () => {
  const [isSmallLaptop] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex flexDir={"column"} pt={{ base: "120px", "2xl": "250px" }}>
      <Heading
        as={"h3"}
        color={"#fff"}
        fontWeight={"700"}
        fontSize={"54px"}
        lineHeight={"62px"}
        textAlign={"center"}
        textTransform={"uppercase"}
      >
        <Span color={"#D9FF81"}>Revolution</Span> Flow
      </Heading>
      <Grid
        templateColumns={{
          base: "1 fr",
          md: "repeat(2, 1fr)",
          "2xl": "repeat(4, 1fr)",
        }}
        mt={"68px"}
        mb={"150px"}
        px={{ base: "20px", xl: "130px" }}
        columnGap={{ base: "20px", xl: "0", "2xl": "10px" }}
        rowGap={{ base: "68px", "2xl": "0" }}
      >
        {revoluteionData.map((item) => (
          <Flex flexDir={"column"} key={item.id}>
            <Flex alignItems={"start"}>
              <Text
                color={"#664EFD"}
                fontWeight={"700"}
                fontSize={"80px"}
                lineHeight={"120px"}
                textAlign={"center"}
                textTransform={"uppercase"}
                me={"-10px"}
                mt={"-25px"}
              >
                {item.id}
              </Text>
              <Flex flexDir={"column"} gap={"20px"}>
                <Text
                  color={"#fff"}
                  fontWeight={"700"}
                  fontSize={"24px"}
                  lineHeight={"32px"}
                  textTransform={"uppercase"}
                >
                  {item.title}
                </Text>
                <Text
                  color={"#fff"}
                  fontWeight={"400"}
                  fontSize={"18px"}
                  lineHeight={"24px"}
                >
                  {item.content}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default Revolution;
