import { chakra, Flex, Grid, Heading, useMediaQuery } from "@chakra-ui/react";
import { canHelpData } from "modules/home/data/can_help_db";
import { useState } from "react";
import CanHelpAccordeon from "./accordeon";
import CanHelpItem from "./canHelpItem";
import HelpMenu from "./menu";

const Span = chakra("span", {});

const menuList = [
  "Startup Founders",
  "Consultants",
  "Agencies",
  "SMB",
  "Enterprise",
];

const CanHelp = () => {
  const [isSmallLaptop] = useMediaQuery("(max-width: 1280px)");
  const [isSelect, setIsSelect] = useState("Startup Founders");
  const selectData = canHelpData.find((item) => item.title === isSelect);
  return (
    <Flex flexDir={"column"}>
      <Flex
        flexDir={"column"}
        mt={{ base: "140px", xl: "250px" }}
        bg={"#fff"}
        borderRadius={"20px"}
        border={"1px solid #DCDCDC"}
        mx={{ base: "20px", xl: "130px" }}
        mb={"-380px"}
        zIndex={2}
      >
        <Heading
          as={"h3"}
          fontSize={{ base: "40px", xl: "80px" }}
          fontWeight={"700"}
          lineHeight={{ base: "58px", xl: "120px" }}
          textAlign={{ base: "start", xl: "center" }}
          textTransform={"uppercase"}
          p={{ base: "20px", xl: "80px" }}
        >
          How can we <Span color={"#664EFD"}>help</Span> you?
        </Heading>

        {!isSmallLaptop && (
          <Grid
            templateColumns={"1fr 2.2fr"}
            pt={"20px"}
            pb={"80px"}
            columnGap={"40px"}
          >
            <Flex flexDir={"column"} borderRight={"1px solid #DCDCDC"}>
              {menuList.map((item) => (
                <HelpMenu
                  key={item}
                  item={item}
                  isSelect={isSelect}
                  setIsSelect={setIsSelect}
                />
              ))}
            </Flex>
            <CanHelpItem selectData={selectData} />
          </Grid>
        )}
        {isSmallLaptop && <CanHelpAccordeon />}
      </Flex>
    </Flex>
  );
};

export default CanHelp;
