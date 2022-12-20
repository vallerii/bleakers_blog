import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import ShevronRight from "assets/talk-to-us/svg/shevron-right.svg";
import ShevronLeftDis from "assets/talk-to-us/svg/shevron-left-dis.svg";
import { useEffect, useState } from "react";

const weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const Calendar = ({ startDay, endDay, currentDay, nextMonth, prevMonth }) => {
  const [selectedDate, setSelectedDate] = useState(
    currentDay.format("YYYY-MM-DD")
  );
  const day = startDay.clone().subtract(1, "day");

  const calendar = [...Array(35)].map(() => day.add(1, "day").clone());

  const month = currentDay.clone().format("MMMM YYYY");

  return (
    <Flex flexDir={"column"} w={"540px"}>
      <Flex
        w={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={"20px"}
      >
        <Heading as={"h3"}>{month}</Heading>
        <Flex alignItems={"center"} gap={"10px"}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            onClick={prevMonth}
          >
            <ShevronLeftDis />
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            onClick={nextMonth}
          >
            <ShevronRight />
          </Flex>
        </Flex>
      </Flex>
      <Grid
        templateColumns={"repeat(7,1fr)"}
        w={"100%"}
        justifyContent={"center"}
      >
        {weekDays.map((item) => (
          <Text key={item} textAlign={"center"} w={"60px"} h={"60px"}>
            {item}
          </Text>
        ))}
      </Grid>
      <Grid
        templateColumns={"repeat(7,1fr)"}
        rowGap={"20px"}
        w={"100%"}
        justifyContent={"center"}
        mb={"10px"}
      >
        {calendar.map((item) => (
          <Flex
            key={item.format("YYYY-MM-DD")}
            alignItems={"center"}
            justifyContent={"center"}
            w={"60px"}
            h={"60px"}
            bg={selectedDate === item.format("YYYY-MM-DD") && "#D5DFFF"}
            borderRadius={"full"}
            cursor={"pointer"}
            onClick={() => {
              setSelectedDate(item.format("YYYY-MM-DD"));
            }}
          >
            <Text textAlign={"center"}>{item.format("DD")}</Text>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default Calendar;
