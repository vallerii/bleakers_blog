import { Box, Flex } from "@chakra-ui/react";
import { NextPrevBtn } from "modules/common/components";
import StepDescription from "modules/talk_to_us/components/ui/step_description";
import StepHeading from "modules/talk_to_us/components/ui/step_heading";
import { InlineWidget } from "react-calendly";
import { useSelector } from "react-redux";
import { getUserContacts } from "store/talk/talk.selectors";

const Step2 = () => {
  const userContacts = useSelector(getUserContacts());
  return (
    <Flex flexDir={"column"} p={"40px 60px 40px 80px"}>
      <StepHeading title={"You can book a free consultation right now."} />
      <StepDescription
        title={
          "We'll discuss your project, explore options, and determine if we're the right fit."
        }
      />
      <Flex w={"100%"} justifyContent={"center"} minH={"640px"}>
        <InlineWidget
          url="https://calendly.com/matthew-k-bleakers"
          styles={{ width: "1000px", color: "#93f523" }}
          prefill={{
            name: userContacts?.name,
            email: userContacts?.email,
          }}
        />
      </Flex>
      {/* <Flex
        alignItems={"center"}
        h={"680px"}
        w={"940px"}
        className="meetings-iframe-container"
      >
        <iframe
          width="100%"
          height="100%"
          src="https://meetings.hubspot.com/matthew-kuzmin?embed=true"
        ></iframe>
      </Flex> */}
      <NextPrevBtn />
    </Flex>
  );
};

export default Step2;
