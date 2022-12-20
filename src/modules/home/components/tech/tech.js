import {
  chakra,
  Flex,
  Heading,
  Image,
  shouldForwardProp,
} from "@chakra-ui/react";
import BgTech1 from "assets/home/background-tech2.png";
import BgTech2 from "assets/home/background-tech.png";
import { isValidMotionProp, motion } from "framer-motion";

const Tech = () => {
  const AnimationBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  return (
    <Flex
      pos={"relative"}
      w={"100%"}
      h={"265px"}
      mt={{ base: "180px", xl: "250px" }}
      gap={"100px"}
      overflow={"hidden"}
    >
      <AnimationBox
        height={"270px"}
        width={"100%"}
        bg={`url('${BgTech1.src}')`}
        backgroundRepeat={"repeat-x"}
        animate={{
          backgroundPosition: ["0px 0", "-1100px 0"],
        }}
        transition={{
          duration: 36,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      ></AnimationBox>

      <Heading
        pos={"absolute"}
        top={"50%"}
        left={"50%"}
        mx={"auto"}
        as={"h3"}
        w={{ base: "350px", xl: "890px" }}
        fontSize={{ base: "40px", xl: "80px" }}
        fontWeight={"700"}
        lineHeight={{ base: "58px", xl: "120px" }}
        textAlign={"center"}
        transform={"translate(-50%,-50%)"}
        textTransform={"uppercase"}
      >
        We use ONLY
        <br /> a modern tech
      </Heading>
    </Flex>
  );
};

export default Tech;
