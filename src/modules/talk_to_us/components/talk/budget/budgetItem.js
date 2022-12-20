import { Flex, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setUserIdeaData } from "store/talk/talk.slice";

const BudgetItem = ({ item, selected, setSelected }) => {
  const dispatch = useDispatch();

  const budgetHandler = (item) => {
    setSelected(item);
    dispatch(setUserIdeaData({ budget: item }));
  };

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      border={"1px solid #DCDCDC"}
      borderRadius={"100px"}
      p={"13px 40px"}
      bg={selected?.id === item.id && "#D9FF81"}
      _hover={{ bg: "#F3F1FE" }}
      cursor={"pointer"}
      onClick={() => budgetHandler(item)}
    >
      <Text fontSize={"18px"} fontWeight={"400"} lineHeight={"24px"}>
        {item.name}
      </Text>
      <Text fontSize={"16px"} fontWeight={"400"} lineHeight={"22px"}>
        {item?.level}
      </Text>
    </Flex>
  );
};

export default BudgetItem;
