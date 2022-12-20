import { Flex, Image } from "@chakra-ui/react";
import LogoImg from "assets/talk-to-us/talk-logo.png";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { resetStep } from "store/talk/talk.slice";

const Logo = () => {
  const router = useRouter();

  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      pos={"absolute"}
      top={"-75px"}
      left={"50%"}
      transform={"translate(-50%,0)"}
      onClick={() => {
        router.push("/");
      }}
      cursor={"pointer"}
    >
      <Image w={"146px"} h={"50px"} src={LogoImg.src} alt={"Logo"} />
    </Flex>
  );
};

export default Logo;
