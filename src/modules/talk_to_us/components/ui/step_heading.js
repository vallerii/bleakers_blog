import { Heading } from "@chakra-ui/react";

const StepHeading = ({ title, textAlign }) => {
  return (
    <Heading
      as={"h2"}
      fontSize={"32px"}
      fontWeight={"700"}
      lineHeight={"40px"}
      textAlign={textAlign}
    >
      {title}
    </Heading>
  );
};

export default StepHeading;
