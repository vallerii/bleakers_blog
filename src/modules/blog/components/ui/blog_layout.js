import { chakra, Flex, Grid, Heading, Input } from "@chakra-ui/react";
import BlogMenu from "../blog/blog_menu";
import SearchIcon from "assets/blog/svg/search.svg";
import { useState } from "react";

const Span = chakra("span", {});

const BlogLayout = ({ children }) => {
  const [searchValue, setSearchvalue] = useState("");
  return (
    <Flex flexDir={"column"} px={"130px"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"90px"}>
        <Heading
          as={"h2"}
          fontWeight={"700"}
          fontSize={"80px"}
          lineHeight={"120px"}
          textTransform={"uppercase"}
        >
          Blog <Span color={"#482DF8"}>Bleakers</Span>
        </Heading>
        <Flex
          w="100%"
          bg={"#fff"}
          border={"1px solid #DCDCDC"}
          p={"13px 20px"}
          borderRadius={"100px"}
          gap={"20px"}
          h={"50px"}
          maxW={"500px"}
        >
          <Flex alignItems={"center"} justifyContent={"center"}>
            <SearchIcon />
          </Flex>
          <Input
            variant={"unstyled"}
            fontSize={"18px"}
            fontWeight={"400"}
            lineHeight={"24px"}
            _placeholder={{ color: "#DCDCDC", fontSize: "inherit" }}
            placeholder={"Search"}
            value={searchValue}
            onChange={(e) => setSearchvalue(e.target.value)}
          />
        </Flex>
      </Flex>
      <Grid templateColumns={"1fr 3fr"} columnGap={"20px"} mt={"120px"}>
        <BlogMenu />
        <Flex flexDir={"column"}>{children}</Flex>
      </Grid>
    </Flex>
  );
};

export default BlogLayout;
