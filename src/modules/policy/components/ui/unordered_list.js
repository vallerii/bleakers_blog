import { ListItem, UnorderedList } from "@chakra-ui/react";

const CustomUnorderedList = ({ data }) => {
  return (
    <UnorderedList fontSize={"18px"} fontWeight={"400"} lineHeight={"24px"}>
      {data.map((item) => (
        <ListItem key={item} ms={"30px"} mb={"5px"}>
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default CustomUnorderedList;
