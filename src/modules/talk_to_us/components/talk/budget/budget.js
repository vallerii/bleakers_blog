import { Flex } from "@chakra-ui/react";
import { budget } from "modules/talk_to_us/data/allocated_budget";
import { useEffect, useState } from "react";
import StepDescription from "../../ui/step_description";
import StepHeading from "../../ui/step_heading";
import Logo from "../logo";
import BudgetItem from "./budgetItem";
import { CustomModal, NextPrevBtn } from "modules/common/components";
import { useSelector } from "react-redux";
import { getUserIdeaData } from "store/talk/talk.selectors";

const Budget = () => {
  const ideaData = useSelector(getUserIdeaData());

  const [selected, setSelected] = useState();

  useEffect(() => {
    setSelected(ideaData?.budget);
  }, [ideaData?.budget]);

  return (
    <CustomModal isOpen={true} mt={"115px"} bg={"#D5DFFF"}>
      <Flex flexDir={"column"} p={"40px 80px"} pos={"relative"}>
        <Logo />
        <StepHeading title={"Is there any budget allocated?"} />
        <StepDescription title={"Select a budget below"} />
        <Flex flexDir={"column"} minW={"950px"} gap={"20px"}>
          {budget.map((item) => (
            <BudgetItem
              key={item.id}
              item={item}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </Flex>
        <NextPrevBtn />
      </Flex>
    </CustomModal>
  );
};

export default Budget;
