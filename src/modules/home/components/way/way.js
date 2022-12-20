import { Flex, Grid, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { DefaultBtn } from "modules/common/components";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Revolution from "./revolution";
import Step from "./step";
import WayImg from "assets/home/way.png";
import { setInTouch } from "store/talk/talk.slice";

const Way = () => {
  const [isSmallLaptop] = useMediaQuery("(max-width: 1096px)");
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Flex
      flexDir={"column"}
      pt={{ base: "120px", "2xl": "250px" }}
      bg={"#0E0E10"}
      id={"showcase"}
    >
      <Grid
        templateColumns={{ base: "1 fr", lg: "repeat(2,1fr)" }}
        px={{ base: "20px", xl: "130px" }}
        columnGap={"8px"}
        alignItems={"center"}
        justifyContent={{ base: "center", lg: "" }}
      >
        {/* <Step /> */}
        <Image src={WayImg.src} alt={"Circle process way"} />
        <Flex
          flexDir={"column"}
          pt={!isSmallLaptop ? "80px" : "120px"}
          ps={{ base: "0", lg: "80px" }}
          gap={{ base: "40px", lg: "24px", xl: "40px" }}
        >
          <Text
            color={"#fff"}
            fontWeight={"700"}
            fontSize={{ base: "24px", md: "40px", lg: "24px", xl: "40px" }}
            lineHeight={{ base: "32px", md: "54px", lg: "32px", xl: "54px" }}
            textTransform={"uppercase"}
          >
            market is full of shitty
            <br /> services and amateur agencies
          </Text>
          <Text
            color={"#fff"}
            fontWeight={"400"}
            fontSize={{ base: "18px", lg: "16px", xl: "18px" }}
            lineHeight={{ base: "24px", lg: "20px", xl: "24px" }}
          >
            In order to obtain your money, they do not care about the end
            result. To make a <br /> difference, we decided to join forces and
            challenge the status quo
          </Text>
          <DefaultBtn
            label="Join the party"
            handleClick={() => {
              router.push("/talk_to_us");
              dispatch(setInTouch(false));
            }}
            customStyles={{
              w: !isMobile ? "260px" : "",
              h: "50px",
              border: "1px solid #DCDCDC",
            }}
          />
        </Flex>
      </Grid>
      <Revolution />
    </Flex>
  );
};

export default Way;
