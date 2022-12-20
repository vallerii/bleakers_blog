import { Flex, Grid, Text } from "@chakra-ui/react";
import ArrowLeft from "assets/blog/svg/shevron-left.svg";
import ArrowRight from "assets/blog/svg/shevron-right.svg";
import ArrowLeftDis from "assets/blog/svg/shevron-left-dis.svg";
import ArrowRightDis from "assets/blog/svg/shevron-right-dis.svg";
import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [1, 2, 3, "...", 40];

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <Grid templateColumns={"1fr"} mt={"80px"}>
      <Flex
        alignItems={"center"}
        gap={"10px"}
        justifySelf={"end"}
        w={"fit-content"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          cursor={"pointer"}
          onClick={() => currentPage !== 1 && prevPage()}
        >
          {currentPage === 1 ? <ArrowLeftDis /> : <ArrowLeft />}
        </Flex>
        {pages.map((item) => (
          <Flex
            key={item}
            alignItems={"center"}
            justifyContent={"center"}
            w={"60px"}
            h={"60px"}
            borderRadius={"full"}
            bg={currentPage === item && "#0E0E10"}
            color={currentPage === item && "#fff"}
            _hover={{ bg: currentPage !== item && "#D5DFFF" }}
            cursor={"pointer"}
            onClick={() => item !== "..." && setCurrentPage(item)}
          >
            <Text fontSize={"18px"} lineHeight={"24px"} fontWeight={"500"}>
              {item}
            </Text>
          </Flex>
        ))}
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          cursor={"pointer"}
          onClick={() => currentPage < 40 && nextPage()}
        >
          {currentPage === 40 ? <ArrowRightDis /> : <ArrowRight />}
        </Flex>
      </Flex>
    </Grid>
  );
};

export default Pagination;
