import { Grid, Flex, Image, Text, Heading, Box } from "@chakra-ui/react";
import { teamData } from "modules/home/data/team_db";
import CanHelp from "../can_help/can_help";

const Team = () => {
  return (
    <Box flexDir={"column"} pos={"relative"} id={"about-us"}>
      <CanHelp />
      <Flex
        bg={"#0E0E10"}
        flexDir={"column"}
        pos={"relative"}
        pb={"120px"}
        px={{ base: "20px", lg: "130px" }}
        pt={"380px"}
        borderRadius={"20px"}
      >
        <Heading
          position={{ base: "", xl: "absolute" }}
          left={"50%"}
          as={"h3"}
          mt={"190px"}
          color={"#D9FF81"}
          fontSize={{ base: "40px", md: "64px", xl: "80px", "2xl": "120px" }}
          fontWeight={"700"}
          lineHeight={{ base: "58px", md: "96px", xl: "120px", "2xl": "120px" }}
          textTransform={"uppercase"}
          maxW={{ base: "350px", md: "690px" }}
          justifySelf={"center"}
        >
          MEET THE CREW
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(2,1fr)", xl: "repeat(4,1fr)" }}
          columnGap={{ base: "10px", lg: "40px" }}
          pt={{ base: "80px", xl: "350px" }}
          pb={{ base: "80px", xl: "76px" }}
        >
          {teamData.map((item, i) => (
            <Flex
              flexDir={"column"}
              key={item.id}
              mt={{
                base:
                  i !== 0 && i % 2 == 0
                    ? `40px`
                    : i % 2 == 0
                    ? `${i * 106}px`
                    : "106px",
                xl: `${i * 106}px`,
              }}
            >
              <Image src={item.photoUrl} alt={"Team member photo"} />
              <Text
                color={"#fff"}
                fontSize={"24px"}
                fontWeight={"700"}
                lineHeight={"32px"}
                textTransform={"uppercase"}
                mt={"20px"}
              >
                {item.name}
              </Text>
              <Text
                color={"#fff"}
                fontSize={"18px"}
                fontWeight={"500"}
                lineHeight={"24px"}
                textTransform={"uppercase"}
                mt={"10px"}
              >
                {item.position}
              </Text>
            </Flex>
          ))}
        </Grid>
        <Text
          position={{ base: "", xl: "absolute" }}
          bottom={"120"}
          color={"#D9FF81"}
          fontSize={{ base: "40px", md: "64px", xl: "80px" }}
          fontWeight={"700"}
          lineHeight={{ base: "58px", md: "96px", xl: "120px" }}
          textTransform={"uppercase"}
        >
          + 96 in-house
          <br /> developers
        </Text>
      </Flex>
    </Box>
  );
};

export default Team;
