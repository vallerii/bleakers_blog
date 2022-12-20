import { chakra, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import StepDescription from "../../ui/step_description";
import StepHeading from "../../ui/step_heading";
import Logo from "../logo";
import Letter from "assets/home/letter.png";
import { DefaultBtn } from "modules/common/components";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setInTouch } from "store/talk/talk.slice";
import { getUserEmail } from "store/talk/talk.selectors";

const Span = chakra("span", {});

const ThankModal = () => {
  const router = useRouter();
  const userEmail = useSelector(getUserEmail());
  return (
    <Flex
      flexDir={"column"}
      p={"40px 140px"}
      maxW={"820px"}
      pos={"relative"}
      gap={"40px"}
    >
      <Logo />
      <Flex flexDir={"column"}>
        <StepHeading title={"Thank you for writing"} textAlign={"center"} />
        <Text
          mt={"10px"}
          mb={"40px"}
          color={"#575757"}
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"24px"}
          textAlign={"center"}
        >
          We will answer you by mail <Span>{userEmail}</Span> within a couple of
          days
        </Text>
      </Flex>
      <Image src={Letter.src} alt="letter" />
      <DefaultBtn
        label={"OK"}
        handleClick={() => {
          router.push("/");
        }}
      />
    </Flex>
  );
};

export default ThankModal;
