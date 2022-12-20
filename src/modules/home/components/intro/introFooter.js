import {
  Text,
  HStack,
  VStack,
  Divider,
  Image,
  Flex,
  Grid,
} from "@chakra-ui/react";
import Hig from "assets/home/hig-intro-footer.png";
import Lego from "assets/home/lego-intro-footer.png";
import Kumho from "assets/home/kumho-intro-footer.png";
import Hundai from "assets/home/Hyundai_Motor_Company_logo2.png";
import Near from "assets/home/near2.png";
import LG from "assets/home/LG_Electronics_logo_20152.png";
import UniCredit from "assets/home/UniCredit2.png";

const dividerStyles = {
  borderColor: "#9FA8C4",
  maxW: "761px",
};

const IntroFooter = () => {
  return (
    <Flex flexDir={"column"} gap={"40px"}>
      <Flex
        alignItems={"center"}
        w={"100%"}
        justifyContent={"center"}
        gap={"20px"}
      >
        <Divider {...dividerStyles} />
        <Text
          color="#9FA8C4"
          fontWeight="500"
          fontSize="18px"
          lineHeight="24px"
          minW={"101px"}
        >
          TRUSTED BY
        </Text>
        <Divider {...dividerStyles} />
      </Flex>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
        justifyContent={"center"}
        columnGap={"80px"}
        rowGap={"80px"}
        alignItems={"center"}
        pb={"40px"}
        px={{ base: "20px", xl: "0" }}
      >
        <Image src={Hundai.src} alt="Hundai" justifySelf={"center"} />
        <Image src={Near.src} alt="Near" justifySelf={"center"} />
        <Image src={LG.src} alt="LG" justifySelf={"center"} />
        <Image src={UniCredit.src} alt="UniCredit" justifySelf={"center"} />
      </Grid>
    </Flex>
  );
};

export default IntroFooter;
