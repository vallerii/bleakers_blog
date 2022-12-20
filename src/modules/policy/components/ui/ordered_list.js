import { ListItem, OrderedList } from "@chakra-ui/react";

const CustomOrderedList = ({ data, listStyleType }) => {
  return (
    <OrderedList
      listStyleType={listStyleType}
      fontSize={"18px"}
      fontWeight={"400"}
      lineHeight={"24px"}
    >
      {data.map((item) => (
        <ListItem key={item} ms={"30px"} mb={"5px"}>
          {item}
        </ListItem>
      ))}
    </OrderedList>
  );
};

export default CustomOrderedList;
