import { chakra, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { CustomModal, DefaultBtn } from "modules/common/components";
import Lamp from "assets/talk-to-us/lamp.png";
import Logo from "./logo";
import StepHeading from "../ui/step_heading";
import StepDescription from "../ui/step_description";
import { useDispatch } from "react-redux";
import { nextStep, setInTouch } from "store/talk/talk.slice";

const Span = chakra("span", {});

const YourIdea = () => {
  const dispatch = useDispatch();
  return (
    <CustomModal isOpen={true} mt={"230px"} bg={"#D5DFFF"}>
      <Flex flexDir={"column"} maxW={"820px"} p={"80px 140px"} pos={"relative"}>
        <Logo />
        <StepHeading title={"Tell us about your idea"} textAlign={"center"} />
        <StepDescription
          title={" Let us know a few details and we`ll contact you shortly"}
          textAlign={"center"}
          mt={"20px"}
        />
        <Image mb={"40px"} mt={"80px"} w={"100%"} src={Lamp.src} alt={"Lamp"} />
        <DefaultBtn
          label={"Get start"}
          customStyles={{ h: "50px" }}
          handleClick={() => dispatch(nextStep())}
        />
        <Text
          mt={"20px"}
          color={"#575757"}
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"24px"}
          textAlign={"center"}
        >
          If you have any other questions, you can{" "}
          <Span
            color={"#482DF8"}
            cursor={"pointer"}
            onClick={() => {
              dispatch(setInTouch(true));
            }}
          >
            email us
          </Span>
        </Text>
      </Flex>
    </CustomModal>
  );
};

export default YourIdea;
