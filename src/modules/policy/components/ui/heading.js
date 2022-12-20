import { Text } from "@chakra-ui/react";

const CustomHeading = ({ title, id, mb }) => {
  return (
    <Text
      id={id}
      fontSize={"32px"}
      fontWeight={"700"}
      lineHeight={"40px"}
      mb={mb}
      mt={"80px"}
    >
      {title}
    </Text>
  );
};

export default CustomHeading;
