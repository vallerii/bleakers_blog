import { Avatar, Flex, Heading, Image, Text } from "@chakra-ui/react";
import CommentIcon from "assets/blog/svg/message.svg";
import HeartIcon from "assets/blog/svg/heart.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const Post = ({ item }) => {
  const post = item.fields;
  const description = post.descriptionofpost || post.content.content[0].content[0].value;
  
  const data = post.date;

  const router = useRouter();
  return (
    <Flex
      flexDir={"column"}
      bg={"#fff"}
      border={"1px solid #DCDCDC"}
      borderRadius={"20px"}
      pos={"relative"}
      cursor={"pointer"}
      //onClick={() => router.push(`/blog/${post.slug}`)}
    >
      <Image src={post.coverImage.fields.file.url} w={"100%"} alt={"Post image"} />
      <Flex
        alignItems={"center"}
        gap={"10px"}
        pos={"absolute"}
        top={"0"}
        right={"0"}
        zIndex={"10"}
        mt={"20px"}
        me={"20px"}
      >
        <Flex
          alignItems={"center"}
          gap={"10px"}
          bg={"#fff"}
          borderRadius={"35px"}
          p={"9px 20px"}
        >
          <Text fontSize={"16px"} lineHeight={"22px"} fontWeight={"400"}>
            {item.comments}
          </Text>
          <CommentIcon />
        </Flex>
        <Flex
          alignItems={"center"}
          gap={"10px"}
          bg={"#fff"}
          borderRadius={"35px"}
          p={"9px 20px"}
        >
          <Text fontSize={"16px"} lineHeight={"22px"} fontWeight={"400"}>
            {item.likes}
          </Text>
          <HeartIcon />
        </Flex>
      </Flex>
      <Flex flexDir={"column"} p={"20px"}>
        <Heading
          as={"h4"}
          fontSize={"24px"}
          lineHeight={"32px"}
          fontWeight={"500"}
        >
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </Heading>
        <Text
          fontSize={"18px"}
          lineHeight={"24px"}
          fontWeight={"400"}
          color={"#575757"}
          mt={"12px"}
          mb={"16px"}
        >
          {description}
        </Text>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          fontSize={"16px"}
          lineHeight={"22px"}
          fontWeight={"400"}
          color={"#575757"}
        >
          <Flex alignItems={"center"} gap={"10px"}>
            <Avatar src={post.author.fields.picture.fields.file.url} w={"40px"} h={"40px"} alt={"avatar"} />
            <Text fontSize={"18px"} lineHeight={"24px"} fontWeight={"400"}>
              {post.author.fields.name}
            </Text>
          </Flex>
          <Text fontSize={"16px"} lineHeight={"22px"} fontWeight={"400"}>
            {post.date}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Post;
