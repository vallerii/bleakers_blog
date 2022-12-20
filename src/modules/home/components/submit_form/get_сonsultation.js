import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { CustomModal, DefaultBtn } from "modules/common/components";
import BookCall from "assets/home/book-call.png";
import { useDispatch } from "react-redux";
import { nextStep } from "store/talk/talk.slice";

const GetConsultation = ({}) => {
  const dispatch = useDispatch();
  return (
    <Flex p={"60px 180px 60px 80px"} gap={"117px"}>
      <Image src={BookCall.src} alt="Smartphone and flying letter" />
      <Flex flexDir={"column"}>
        <Heading
          as={"h2"}
          fontSize={"32px"}
          fontWeight={"700"}
          lineHeight={"40px"}
        >
          Let&apos;s save time & chat!
        </Heading>
        <Flex flexDir={"column"} w={"402px"} mt={"20px"} mb={"40px"}>
          <Text
            fontSize={"18px"}
            fontWeight={"400"}
            lineHeight={"24px"}
            mb={"10px"}
          >
            We understand the challenges of starting a new project, and
            we&apos;re here to help. Let&apos;s discuss your project scope,
            tools, and see if we&apos;re the right fit.
          </Text>
          <Text fontSize={"18px"} fontWeight={"400"} lineHeight={"24px"}>
            If not, we can recommend other agencies or freelancers who may be a
            better option
          </Text>
        </Flex>
        <DefaultBtn
          label={"Get Consultation"}
          handleClick={() => dispatch(nextStep())}
        />
      </Flex>
    </Flex>
  );
};

export default GetConsultation;
