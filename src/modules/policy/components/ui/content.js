import { Text } from "@chakra-ui/react";

const Content = ({ text, mb, mt }) => {
  return (
    <Text
      fontSize={"18px"}
      fontWeight={"400"}
      lineHeight={"24px"}
      mb={mb && mb}
      mt={mt ? mt : "20px"}
    >
      {text}
    </Text>
  );
};

export default Content;
