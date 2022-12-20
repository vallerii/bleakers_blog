import { Text } from "@chakra-ui/react";

const StepDescription = ({ title, textAlign, mt, mb }) => {
  return (
    <Text
      mt={mt ? mt : "10px"}
      mb={mb ? mb : "40px"}
      color={"#575757"}
      fontSize={"18px"}
      fontWeight={"400"}
      lineHeight={"24px"}
      textAlign={textAlign}
    >
      {title}
    </Text>
  );
};

export default StepDescription;
