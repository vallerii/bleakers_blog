import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import DefaultBtn from "../buttons/defaultBtn";
import HeaderLink from "./headerLink";
import HeaderLogo from "assets/home/header-logo.png";
import CloseIcon from "assets/home/svg/close-mobile-menu.svg";
import MenuIcon from "assets/home/svg/mobile-menu.svg";
import HeaderBg from "assets/home/intro-background.png";
import { useEffect, useState } from "react";
import { resetStep } from "store/talk/talk.slice";

const MobileMenu = () => {
  const router = useRouter();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [openMobileMenu]);
  return (
    <Flex
      w={"100%"}
      flexDir={"column"}
      px={{ base: "20px", md: "40px", lg: "80px" }}
      zIndex={100}
      pos="fixed"
      right="0"
      left="0"
      justifyContent="center"
      bg={openMobileMenu ? "#F3F1FE" : "#F3F1FE"}
      bgImage={!openMobileMenu && `url('${HeaderBg.src}')`}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"} py="20px">
        <Link href="/">
          <Image src={HeaderLogo.src} w="50px" h="50px" alt="Logo" />
        </Link>
        <Flex alignItems={"center"} gap={"10px"}>
          <Text fontSize={"18px"} fontWeight={"500"} lineHeight={"24px"}>
            Menu
          </Text>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
            onClick={() =>
              !openMobileMenu
                ? setOpenMobileMenu(true)
                : setOpenMobileMenu(false)
            }
          >
            {openMobileMenu ? <CloseIcon /> : <MenuIcon />}
          </Flex>
        </Flex>
      </Flex>
      {openMobileMenu && (
        <Flex
          h={"calc(100vh - 90px)"}
          w={"100%"}
          mt={"90px"}
          pos={"fixed"}
          bg={"#F3F1FE"}
          top={"0"}
          left={"0"}
          pt={{ base: "20px" }}
          pb={{ base: "40px", lg: "80px" }}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={{ base: "20px", md: "40px", lg: "80px" }}
        >
          <Flex flexDir={"column"} gap={"40px"}>
            <HeaderLink
              href="/#services"
              onClick={() => setOpenMobileMenu(false)}
            >
              Services
            </HeaderLink>
            <HeaderLink
              href="/#showcase"
              onClick={() => setOpenMobileMenu(false)}
            >
              Showcase
            </HeaderLink>
            <HeaderLink onClick={() => router.push("/blog")}>Blog</HeaderLink>
            <HeaderLink
              href="/#contact-us"
              onClick={() => setOpenMobileMenu(false)}
            >
              Contact Us
            </HeaderLink>
            <HeaderLink
              href="/#about-us"
              onClick={() => setOpenMobileMenu(false)}
            >
              About us
            </HeaderLink>
          </Flex>
          <DefaultBtn
            label="Join the party"
            handleClick={() => {
              router.push("/talk_to_us");
              dispatch(setInTouch(false));
              dispatch(resetStep());
            }}
            customStyles={{ w: { base: "100%", sm: "260px" }, h: "50px" }}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default MobileMenu;
