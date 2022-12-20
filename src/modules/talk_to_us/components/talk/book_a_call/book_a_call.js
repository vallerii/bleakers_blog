import { chakra, color, Flex, Text } from "@chakra-ui/react";
import { CustomModal, NextPrevBtn } from "modules/common/components";
import StepHeading from "../../ui/step_heading";
import Logo from "../logo";
import LocaleIcon from "assets/talk-to-us/svg/timezone-icon.svg";
import Calendar from "./calendar";
import moment from "moment/moment";
import { useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { useSelector } from "react-redux";
import { getUserIdeaData } from "store/talk/talk.selectors";

const Span = chakra("span", {});

const BookACall = () => {
  const ideaData = useSelector(getUserIdeaData());

  // moment.updateLocale("en", { week: { dow: 1 } });
  // const [currentDay, setCurrentDay] = useState(moment());

  // const startDay = currentDay.clone().startOf("month").startOf("week");
  // const endDay = moment().endOf("month").endOf("week");

  // const nextMonth = () => {
  //   setCurrentDay((prev) => prev.clone().add(1, "month"));
  // };
  // const prevMonth = () => {
  //   setCurrentDay((prev) => prev.clone().subtract(1, "month"));

  return (
    <CustomModal isOpen={true} mt={"115px"} bg={"#D5DFFF"}>
      <Flex flexDir={"column"} p={"40px 80px 30px 80px"}>
        <Logo />
        <StepHeading title={"Thank you for taking the survey. "} />
        <Flex>
          <Flex
            flexDir={"column"}
            gap={"10px"}
            mt={"10px"}
            mb={"30px"}
            color={"#575757"}
            fontSize={"18px"}
            fontWeight={"400"}
            lineHeight={"24px"}
          >
            <Text fontWeight={"700"}>
              You can book a free consultation right now
            </Text>
            <Text>
              We&apos;ll discuss your project, explore options, and determine if
              we&apos;re the right fit.
            </Text>
          </Flex>
        </Flex>

        <Flex w={"100%"} justifyContent={"center"} minH={"640px"}>
          <InlineWidget
            url="https://calendly.com/matthew-k-bleakers"
            styles={{ width: "1000px", color: "#93f523" }}
            prefill={{
              name: ideaData?.name,
              email: ideaData?.email,
            }}
          />
        </Flex>

        {/* <Calendar
            startDay={startDay}
            endDay={endDay}
            currentDay={currentDay}
            nextMonth={nextMonth}
            prevMonth={prevMonth}
          /> */}

        {/* <iframe
            width="540px"
            height="620px"
            src="https://meetings.hubspot.com/matthew-kuzmin?embed=true"
          ></iframe> */}

        <NextPrevBtn />
      </Flex>
    </CustomModal>
  );
};

export default BookACall;
