import { Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ShevronDown from "assets/talk-to-us/svg/shevron-down.svg";
import ShevronUp from "assets/talk-to-us/svg/shevron-up.svg";

const StepSelect = ({ data, label, onClick, selected }) => {
  const selectRef = useRef(null);
  const [showList, setShowList] = useState(false);

  const outHandler = (e) => {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      setShowList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", outHandler, true);
  }, []);

  return (
    <Flex flexDirection={"column"} pos={"relative"}>
      <Text
        mb={"3px"}
        color={"##181717"}
        fontSize={"18px"}
        fontWeight={"400"}
        lineHeight={"24px"}
        ms={"18px"}
      >
        {label}
      </Text>

      <Flex flexDir={"column"} pos={"relative"} ref={selectRef}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          h={"50px"}
          fontStyle={"normal"}
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"24px"}
          color={"#0E0E10"}
          bg={"#fff"}
          border={"1px solid #DCDCDC"}
          _hover={{ borderColor: "#575757" }}
          _active={{ borderColor: "#0E0E10" }}
          borderRadius={"100px"}
          px={"20px"}
          onClick={() => setShowList(!showList)}
          cursor={"pointer"}
        >
          <Text>{selected}</Text>
          <Flex
            alignItems={"center"}
            cursor={"pointer"}
            onClick={() => setShowList(!showList)}
          >
            {!showList ? <ShevronDown /> : <ShevronUp />}
          </Flex>
        </Flex>
        {showList && (
          <Flex
            w={"100%"}
            flexDirection={"column"}
            pos={"absolute"}
            top={"55px"}
            fontStyle={"normal"}
            fontSize={"18px"}
            fontWeight={"400"}
            lineHeight={"24px"}
            color={"#252527"}
            border={"1px solid #DCDCDC"}
            borderRadius={"20px"}
            py={"12px"}
            bg={"#fff"}
            zIndex={"10"}
          >
            <Flex
              flexDirection={"column"}
              h={data?.length > 3 ? "150px" : "fit-content"}
              overflowY={"auto"}
            >
              {data?.map((item) => (
                <Text
                  key={item}
                  py={"14px"}
                  pl={"23px"}
                  w={"100%"}
                  _hover={{ bg: "#F3F1FE" }}
                  cursor={"pointer"}
                  onClick={() => {
                    setShowList(false);
                    onClick && onClick(item);
                  }}
                >
                  {item}
                </Text>
              ))}
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default StepSelect;
