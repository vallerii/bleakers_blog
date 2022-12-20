import {
  Avatar,
  chakra,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import BlogLayout from "../ui/blog_layout";
import PdfIcon from "assets/blog/svg/pdf-icon.svg";
import AvatarImg from "assets/blog/avatar1.png";
import CommentIcon from "assets/blog/svg/message.svg";
import HeartIcon from "assets/blog/svg/heart.svg";
import BlogDetail from "assets/blog/blog-detail.png";
import BlogDetail2 from "assets/blog/blog-detail2.png";
import Like from "assets/blog/svg/like.svg";
import Dislike from "assets/blog/svg/dislike.svg";
import { useState } from "react";
import DownloadingForm from "./downloading_form";

const Span = chakra("span", {});

const PostDetail = ({post}) => {
  const [showDownloading, setShowDownloading] = useState(false);
  const postEntire = post.fields;
  const description = postEntire.descriptionofpost || '' ;

  console.log( postEntire )
  return (
    <>
      <DownloadingForm
        showDownloading={showDownloading}
        setShowDownloading={setShowDownloading}
      />
      <BlogLayout>
        <Flex flexDir={"column"}>
          <Flex
            alignItems={"center"}
            gap={"20px"}
            p={"20px 40px"}
            bg={"#D9FF81"}
            borderRadius={"20px"}
            mb={"20px"}
          >
            <PdfIcon />
            <Text fontSize={"18px"} lineHeight={"24px"} fontWeight={"400"}>
              <Span
                color={"#664EFD"}
                cursor={"pointer"}
                onClick={() => setShowDownloading(true)}
              >
                Download this entire page
              </Span>{" "}
              + 2 extra reasons
            </Text>
          </Flex>
          <Grid templateColumns={"1fr"} borderRadius={"20px"}>
            <Flex
              flexDir={"column"}
              p={"40px"}
              bg={"#fff"}
              borderTopRadius={"20px"}
            >
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                fontSize={"16px"}
                lineHeight={"22px"}
                fontWeight={"400"}
                color={"#575757"}
              >
                <Flex alignItems={"center"} gap={"10px"}>
                  <Avatar
                    src={postEntire.author.fields.picture.fields.file.url}
                    w={"40px"}
                    h={"40px"}
                    alt={"avatar"}
                  />
                  <Text
                    fontSize={"18px"}
                    lineHeight={"24px"}
                    fontWeight={"400"}
                  >
                    {postEntire.author.fields.name}
                  </Text>
                </Flex>
                <Text fontSize={"16px"} lineHeight={"22px"} fontWeight={"400"}>
                  {postEntire.date}
                </Text>
              </Flex>
              <Heading
                as={"h2"}
                fontWeight={"700"}
                fontSize={"80px"}
                lineHeight={"120px"}
                textTransform={"uppercase"}
                mt={"20px"}
                mb={"40px"}
              >
                {postEntire.title}
              </Heading>
              <Flex alignItems={"center"} justifyContent={"end"} gap={"10px"}>
                <Flex
                  alignItems={"center"}
                  gap={"10px"}
                  bg={"#F3F1FE"}
                  borderRadius={"35px"}
                  p={"9px 20px"}
                >
                  <Text
                    fontSize={"16px"}
                    lineHeight={"22px"}
                    fontWeight={"400"}
                  >
                    Go to discussion (23)
                  </Text>
                  <CommentIcon />
                </Flex>
                <Flex
                  alignItems={"center"}
                  gap={"10px"}
                  bg={"#F3F1FE"}
                  borderRadius={"35px"}
                  p={"9px 20px"}
                >
                  <Text
                    fontSize={"16px"}
                    lineHeight={"22px"}
                    fontWeight={"400"}
                  >
                    23
                  </Text>
                  <HeartIcon />
                </Flex>
              </Flex>
            </Flex>
            <Image src={postEntire.coverImage.fields.file.url} alt={"Blog detail image"} />
            <Flex p={"50px 40px"} bg={"#fff"} borderBottomRadius={"20px"}>
              <Text
                color={"#575757"}
                fontSize={"18px"}
                lineHeight={"24px"}
                fontWeight={"400"}
              >
                {description}
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              bg={"#D9FF81"}
              borderRadius={"20px"}
              gap={"20px"}
              p={"20px 40px"}
              mt={"20px"}
            >
              <Text fontSize={"18px"} lineHeight={"24px"} fontWeight={"400"}>
                If you want to create your own application using a custom code
                book a consultation
                <Span color={"#664EFD"}> book a consultation</Span>
              </Text>
            </Flex>
            <Flex
              p={"40px"}
              mt={"20px"}
              alignItems={"center"}
              bg={"#fff"}
              borderRadius={"20px"}
              gap={"40px"}
            >
              {postEntire.secondImg && (
                <Image src={postEntire.secondImg?.fields.file.url} alt={"Blog image"} />
              )}
              <Text
                color={"#575757"}
                fontSize={"18px"}
                lineHeight={"24px"}
                fontWeight={"400"}
              >
                {postEntire.content.content[0].content[0].value}
              </Text>
            </Flex>
            <Flex
              p={"40px"}
              mt={"20px"}
              alignItems={"center"}
              justifyContent={"space-between"}
              bg={"#fff"}
              borderRadius={"20px"}
              gap={"40px"}
            >
              <Text fontSize={"24px"} lineHeight={"32px"} fontWeight={"700"}>
                23 comments
              </Text>
              <Flex alignItems={"center"} justifyContent={"end"} gap={"10px"}>
                <Flex
                  alignItems={"center"}
                  gap={"10px"}
                  bg={"#F3F1FE"}
                  borderRadius={"35px"}
                  p={"9px 20px"}
                >
                  <Text
                    fontSize={"16px"}
                    lineHeight={"22px"}
                    fontWeight={"400"}
                  >
                    23
                  </Text>
                  <HeartIcon />
                </Flex>
                <Flex
                  alignItems={"center"}
                  gap={"20px"}
                  bg={"#F3F1FE"}
                  borderRadius={"35px"}
                  p={"9px 20px"}
                >
                  <Like />
                  <Text
                    fontSize={"16px"}
                    lineHeight={"22px"}
                    fontWeight={"400"}
                  >
                    78
                  </Text>
                  <Dislike />
                </Flex>
              </Flex>
            </Flex>
          </Grid>
        </Flex>
      </BlogLayout>
    </>
  );
};

export default PostDetail;
