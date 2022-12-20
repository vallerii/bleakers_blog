import { Flex, Text } from "@chakra-ui/react";
import LeftArrow from "assets/talk-to-us/svg/left-arrow.svg";
import RightArrow from "assets/talk-to-us/svg/right-arrow.svg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentStep } from "store/talk/talk.selectors";
import { nextStep, prevStep } from "store/talk/talk.slice";

const NextPrevBtn = ({ mt, isValid, onClick }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentStep = useSelector(getCurrentStep());

  const prevHandler = () => {
    dispatch(prevStep());
  };

  const nextHandler = () => {
    if (isValid === undefined) {
      dispatch(nextStep());
    } else {
      isValid && dispatch(nextStep());
    }
    onClick && onClick();
  };

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      mt={mt ? mt : "40px"}
    >
      {currentStep > 2 && currentStep < 8 && (
        <Flex
          alignItems={"center"}
          gap={"14px"}
          w={"fit-content"}
          cursor={"pointer"}
          onClick={prevHandler}
        >
          <LeftArrow />
          <Text fontSize={"18px"} fontWeight={"500"} lineHeight={"24px"}>
            Back
          </Text>
        </Flex>
      )}
      <Flex></Flex>

      {(router.pathname === "/talk_to_us" && currentStep === 6) ||
      (router.pathname === "/" && currentStep === 3) ? null : (
        <Flex
          alignItems={"center"}
          gap={"14px"}
          w={"fit-content"}
          cursor={"pointer"}
          onClick={nextHandler}
        >
          <Text fontSize={"18px"} fontWeight={"500"} lineHeight={"24px"}>
            Next
          </Text>
          <RightArrow />
        </Flex>
      )}
    </Flex>
  );
};

export default NextPrevBtn;
