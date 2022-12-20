import { Flex, Heading, Text } from "@chakra-ui/react";
import { DefaultBtn } from "modules/common/components";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { resetStep } from "store/talk/talk.slice";

const CanHelpItem = ({ selectData }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Flex flexDir={"column"} gap={"40px"} pe={"140px"}>
      <Heading
        as={"h4"}
        fontSize={"32px"}
        fontWeight={"700"}
        lineHeight={"40px"}
      >
        {selectData.title}
      </Heading>
      <Text fontSize={"24px"} fontWeight={"500"} lineHeight={"32px"}>
        {selectData.description}
      </Text>
      <DefaultBtn
        label={"Join the party"}
        customStyles={{ w: "260px", h: "50px" }}
        handleClick={() => {
          router.push("/talk_to_us");
          dispatch(setInTouch(false));
          dispatch(resetStep());
        }}
      />
    </Flex>
  );
};

export default CanHelpItem;
