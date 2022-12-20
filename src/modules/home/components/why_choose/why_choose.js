import {
  chakra,
  Flex,
  Grid,
  Heading,
  shouldForwardProp,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import Star from "assets/home/svg/star-icon.svg";
import { chooseData } from "modules/home/data/why_choose";

const textHeadingStyle = {
  fontSize: { base: "32px", xl: "80px" },
  fontWeight: "700",
  lineHeight: { base: "40px", xl: "120px" },
  textAlign: "center",
};
const textStyle = {
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "32px",
  justifySelf: "center",
  textAlign: "center",
};
const flexStyle = {
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  py: { base: "32px", xl: "40px" },
  borderRadius: "20px",
};
const AnimationBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const WhyChoose = () => {
  const [isSmallLaptop] = useMediaQuery("(max-width: 1096px)");

  return (
    <Grid
      templateColumns={{ base: "1fr", xl: "1fr 2fr" }}
      mt={{ base: "120px", xl: "250px" }}
      px={{ base: "20px", md: "130px" }}
      columnGap={{ base: "60px", "2xl": "155px" }}
      rowGap={{ base: "40px", xl: "0" }}
    >
      <Grid
        templateRows={"1fr 1fr"}
        gap={"15px"}
        minW={{ base: "320px", xl: "560px" }}
      >
        <Grid templateColumns={"1fr 1fr"} columnGap={"15px"}>
          <AnimationBox
            animate={{
              background: [
                "#D5DFFF",
                "#D9FF81",
                "#D5DFFF",
                "#D5DFFF",
                "#D5DFFF",
              ],
            }}
            transition={{
              duration: 24,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            {...flexStyle}
            bg={"#D5DFFF"}
          >
            <Text {...textHeadingStyle}>100+</Text>
            <Text {...textStyle}>
              years of <br /> experience
            </Text>
          </AnimationBox>
          <AnimationBox
            animate={{
              background: [
                "#D5DFFF",
                "#D9FF81",
                "#D5DFFF",
                "#D5DFFF",
                "#D5DFFF",
              ],
            }}
            transition={{
              delay: 8,
              duration: 24,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            {...flexStyle}
            bg={"#D5DFFF"}
          >
            <Text {...textHeadingStyle}>896</Text>
            <Text {...textStyle}>
              projects <br /> made
            </Text>
          </AnimationBox>
        </Grid>
        <AnimationBox
          animate={{
            background: ["#D5DFFF", "#D9FF81", "#D5DFFF", "#D5DFFF", "#D5DFFF"],
          }}
          transition={{
            delay: 16,
            duration: 24,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          {...flexStyle}
          bg={"#D5DFFF"}
        >
          <Text {...textHeadingStyle}>143,460</Text>
          <Text {...textStyle}>hours of development</Text>
        </AnimationBox>
      </Grid>
      <Flex flexDir={"column"} gap={"30px"} gridRow={isSmallLaptop && "1"}>
        <Heading
          as={"h3"}
          fontSize={{ base: "40px", xl: "80px" }}
          fontWeight={"700"}
          lineHeight={{ base: "58px", xl: "120px" }}
          textTransform={"uppercase"}
        >
          Why choose <br /> Bleakers?
        </Heading>
        <Flex flexDir={"column"} gap={"30px"}>
          {chooseData.map((item) => (
            <Flex key={item.id} flexDir={"column"} gap={"10px"}>
              <Flex gap={"13px"} alignItems={"center"}>
                {item.icon}
                <Text fontSize={"24px"} fontWeight={"500"} lineHeight={"32px"}>
                  {item.text}
                </Text>
              </Flex>
              <Text
                fontSize={"18px"}
                ml={"31px"}
                fontWeight={"400"}
                lineHeight={"24px"}
              >
                {item.description}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Grid>
  );
};

export default WhyChoose;
