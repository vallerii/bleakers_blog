import { Text } from "@chakra-ui/react";

const VerySmallHeading = ({ text, mb, mt }) => {
  return (
    <Text
      fontSize={"18px"}
      fontWeight={"700"}
      lineHeight={"24px"}
      mb={mb && mb}
      mt={mt ? mt : "20px"}
    >
      {text}
    </Text>
  );
};

export default VerySmallHeading;
