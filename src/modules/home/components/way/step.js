import { chakra, Flex, Grid, Image, Text } from "@chakra-ui/react";
import Arrow1 from "assets/home/arrow1_2.png";
import Arrow2 from "assets/home/arrow2_2.png";
import Arrow3 from "assets/home/arrow3_2.png";
import Arrow4 from "assets/home/arrow4_2.png";

const Span = chakra("span", {});

const Step = () => {
  return (
    <Flex flexDir={"column"}>
      <Text
        fontFamily={"Indie Flower"}
        color={"#D9FF81"}
        fontSize={"32px"}
        fontWeight={"400"}
        lineHeight={"47px"}
        textAlign={"center"}
        mb={"-10px"}
      >
        New idea
      </Text>
      <Grid templateColumns={"1fr 1fr"}>
        <Image
          src={Arrow1.src}
          alt={"Arrow"}
          alignSelf={"end"}
          justifySelf={"center"}
        />

        <Image
          src={Arrow2.src}
          alt={"Arrow"}
          alignSelf={"end"}
          justifySelf={"center"}
        />
      </Grid>
      <Grid templateColumns={"1fr 1.1fr 1fr"} alignItems={"center"}>
        <Text
          fontFamily={"Indie Flower"}
          color={"#D9FF81"}
          fontSize={"32px"}
          fontWeight={"400"}
          lineHeight={"47px"}
          textAlign={"center"}
          mt={"-20px"}
        >
          Time & money <br /> are wasted
        </Text>
        <Text
          color={"#fff"}
          fontSize={"54px"}
          fontWeight={"700"}
          lineHeight={"72px"}
          textAlign={"center"}
          textTransform={"uppercase"}
          w={"300px"}
        >
          WE WANT TO <Span color={"#664EFD"}>BREAK</Span> THE CYCLE
        </Text>
        <Text
          fontFamily={"Indie Flower"}
          color={"#D9FF81"}
          fontSize={"32px"}
          fontWeight={"400"}
          lineHeight={"47px"}
          textAlign={"center"}
          mt={"-20px"}
        >
          Found agency
        </Text>
      </Grid>
      <Grid templateColumns={"1fr 1fr"}>
        <Image
          src={Arrow4.src}
          alt={"Arrow"}
          alignSelf={"end"}
          justifySelf={"center"}
        />

        <Image
          src={Arrow3.src}
          alt={"Arrow"}
          alignSelf={"end"}
          justifySelf={"center"}
        />
      </Grid>
      <Text
        fontFamily={"Indie Flower"}
        color={"#D9FF81"}
        fontSize={"32px"}
        fontWeight={"400"}
        lineHeight={"47px"}
        textAlign={"center"}
        mt={"-10px"}
      >
        Process issues
      </Text>
    </Flex>
  );
};

export default Step;
