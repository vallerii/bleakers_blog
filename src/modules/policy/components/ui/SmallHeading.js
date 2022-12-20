import { Text } from "@chakra-ui/react";

const SmallHeading = ({ title }) => {
  return (
    <Text
      fontSize={"24px"}
      fontWeight={"700"}
      lineHeight={"32px"}
      mb={"20px"}
      mt={"40px"}
    >
      {title}
    </Text>
  );
};

export default SmallHeading;
