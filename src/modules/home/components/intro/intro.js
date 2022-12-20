import { Flex, Image, Text } from "@chakra-ui/react";
import IntroLogo from "assets/home/intro-logo2.png";
import { DefaultBtn } from "modules/common/components";
import IntroFooter from "./introFooter";
import { useRouter } from "next/router";
import IntroBg from "assets/home/intro-background.png";
import { useDispatch } from "react-redux";
import { resetStep, setInTouch } from "store/talk/talk.slice";

const Intro = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Flex
      w="100%"
      h="991px"
      flexDirection="column"
      bg={"#F3F1FE"}
      bgImage={`url('${IntroBg.src}')`}
    >
      <Flex
        w="100%"
        h="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontWeight="400" fontSize="18px" lineHeight="24px">
          Development agency 2.0
        </Text>
        <Image mb="10px" src={IntroLogo.src} alt=" Bleakers Logo" />
        <Text
          mb="73px"
          fontWeight="500"
          fontSize={{ base: "18px", xl: "24px" }}
          lineHeight={{ base: "24px", xl: "32px" }}
          textAlign={{ base: "center" }}
          maxW={{ base: "350px", "2xl": "540px" }}
        >
          Tired of development that sucks, we reimagined product development
        </Text>
        <DefaultBtn
          label="Join the party"
          handleClick={() => {
            router.push("/talk_to_us");
            dispatch(setInTouch(false));
            dispatch(resetStep());
          }}
          customStyles={{ w: "260px", h: "50px" }}
        />
      </Flex>
      <IntroFooter />
    </Flex>
  );
};

export default Intro;
