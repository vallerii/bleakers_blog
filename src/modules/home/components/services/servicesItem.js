import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { DefaultBtn } from "modules/common/components";
import CheckIcon from "assets/home/svg/check-icon.svg";
import StarIcon from "assets/home/svg/star-icon.svg";
import SpecialOffer from "assets/home/special_offer2.png";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { resetStep, setInTouch } from "store/talk/talk.slice";

const ServicesItem = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);

  const bgColor = {
    "Custom development": "#fff",
    MVP: "#D9FF81",
    Subscription: "#D5DFFF",
  };
  const divideColor = {
    "Custom development": "#DCDCDC",
    MVP: "#0E0E10",
    Subscription: "#575757",
  };
  return (
    <Flex
      flexDir={"column"}
      py={{ base: "20px", "2xl": "40px" }}
      bg={bgColor[item.heading]}
      borderRadius={"20px"}
      pos={"relative"}
      h={"fit-content"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {item.heading === "MVP" && (
        <Image
          src={SpecialOffer.src}
          alt={"Bage"}
          pos={"absolute"}
          top={{ base: "-35px", xl: "-60px" }}
          right={{ base: "0", xl: "-25px" }}
          transform={"rotate(-5deg)"}
          zIndex={"1"}
        />
      )}
      <Box px={{ base: "20px", "2xl": "40px" }}>
        <Heading
          as={"h3"}
          fontSize={{ base: "40px", md: "32px", "2xl": "40px" }}
          fontWeight={"700"}
          lineHeight={{ base: "58px", md: "1.5", "2xl": "58px" }}
          mb={"20px"}
          textTransform={"uppercase"}
          h={{ base: "160px", "2xl": "116px" }}
        >
          {item.heading}
        </Heading>
        <Text
          fontSize={"18px"}
          fontWeight={"500"}
          lineHeight={"24px"}
          mb={"30px"}
          w={"90%"}
        >
          {item.description}
        </Text>
        <Flex
          flexDir={{ base: "column", "2xl": "row" }}
          alignItems={"center"}
          gap={"20px"}
        >
          <DefaultBtn
            label={"Join the party"}
            customStyles={{
              bg: "#0E0E10",
              color: "#fff",
              w: { base: "100%", "2xl": "150px" },
              h: "50px",
            }}
            handleClick={() => {
              router.push("/talk_to_us");
              dispatch(setInTouch(false));
              dispatch(resetStep());
            }}
          />
          <Text fontSize={"28px"} fontWeight={"700"} lineHeight={"40px"}>
            {item.text}
          </Text>
        </Flex>
        <Divider
          borderColor={divideColor[item.heading]}
          mt={"20px"}
          mb={"35px"}
        />
      </Box>
      <Box pos={"relative"}>
        {!hover && (
          <Box px={{ base: "20px", "2xl": "40px" }}>
            <Text
              fontSize={"18px"}
              fontWeight={"500"}
              lineHeight={"24px"}
              mb={"35px"}
            >
              What includes in this package:
            </Text>
            <Flex flexDir={"column"} gap={"20px"}>
              {item.options.map((item) => (
                <Flex key={item} alignItems={"center"} gap={"10px"}>
                  <CheckIcon />
                  <Text
                    fontSize={"18px"}
                    fontWeight={"400"}
                    lineHeight={"24px"}
                  >
                    {item}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Box>
        )}
        {hover && (
          <Box
            pos={"absolute"}
            px={{ base: "20px", "2xl": "40px" }}
            pb={"40px"}
            bg={bgColor[item.heading]}
            borderBottomRadius={"20px"}
            zIndex={
              item.heading === "Custom development"
                ? "20"
                : item.heading === "MVP "
                ? "18"
                : "17"
            }
          >
            <Text
              fontSize={"18px"}
              fontWeight={"500"}
              lineHeight={"24px"}
              mb={"20px"}
            >
              What makes it special
            </Text>

            <Flex flexDir={"column"}>
              <Text
                fontSize={"18px"}
                fontWeight={"400"}
                lineHeight={"24px"}
                mb={"40px"}
              >
                {item?.content}
              </Text>
              <Text fontSize={"18px"} fontWeight={"500"} lineHeight={"24px"}>
                What can we help you with
              </Text>
              <UnorderedList
                fontSize={"18px"}
                fontWeight={"400"}
                lineHeight={"24px"}
                ps={"2px"}
              >
                {item.hoverOptions.map((item) => (
                  <ListItem
                    key={item}
                    alignItems={"start"}
                    gap={"15px"}
                    mt={"20px"}
                  >
                    <Text>{item}</Text>
                  </ListItem>
                ))}
              </UnorderedList>
            </Flex>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default ServicesItem;
