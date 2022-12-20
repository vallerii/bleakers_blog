import { Flex } from "@chakra-ui/react";
import Post from "./post";
import Pagination from "./pagination";

const Posts = ({posts}) => {
  return (
    <Flex flexDir={"column"} gap={"40px"}>
      {posts.map((post) => (
        <Post key={post.fields.slug} item={post} />
      ))}
      <Pagination />
    </Flex>
  );
};

export default Posts;
